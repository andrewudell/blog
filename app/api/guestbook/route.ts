import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // format: "username/repo"

interface GitHubIssue {
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

export async function GET() {
  try {
    if (!GITHUB_TOKEN || !GITHUB_REPO) {
      return NextResponse.json(
        { error: 'GitHub configuration missing' },
        { status: 500 }
      );
    }

    // Fetch issues with the "guestbook" label
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/issues?labels=guestbook&state=open&sort=created&direction=desc`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        cache: 'no-store', // Always fetch fresh data
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch guestbook entries');
    }

    const issues = await response.json();

    // Transform issues into guestbook entries
    const entries = issues.map((issue: GitHubIssue) => {
      // Parse name from title "Guestbook entry from NAME"
      const nameMatch = issue.title.match(/Guestbook entry from (.+)/);
      const name = nameMatch ? nameMatch[1] : issue.user.login;

      return {
        id: issue.number,
        name: name,
        message: issue.body,
        date: new Date(issue.created_at).toISOString().split('T')[0],
        avatar: issue.user.avatar_url,
      };
    });

    return NextResponse.json({ entries });
  } catch (error) {
    console.error('Error fetching guestbook:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guestbook entries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!GITHUB_TOKEN || !GITHUB_REPO) {
      return NextResponse.json(
        { error: 'GitHub configuration missing' },
        { status: 500 }
      );
    }

    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Create a new issue
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Guestbook entry from ${name}`,
          body: message,
          labels: ['guestbook'],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create guestbook entry');
    }

    const issue = await response.json();

    return NextResponse.json({
      success: true,
      entry: {
        id: issue.number,
        name: issue.user.login,
        message: issue.body,
        date: new Date(issue.created_at).toISOString().split('T')[0],
      },
    });
  } catch (error) {
    console.error('Error creating guestbook entry:', error);
    return NextResponse.json(
      { error: 'Failed to create guestbook entry' },
      { status: 500 }
    );
  }
}
