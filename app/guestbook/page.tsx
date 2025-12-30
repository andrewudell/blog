'use client';

import { useState, useEffect } from 'react';
import HyperCardNav from '@/components/HyperCardNav';
import HyperCardField from '@/components/HyperCardField';

export default function GuestbookPage() {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/guestbook');
      const data = await response.json();
      if (data.entries) {
        setEntries(data.entries);
      }
    } catch (err) {
      console.error('Error fetching entries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitting(true);

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('✓ Entry added! Refreshing...');
        setName('');
        setMessage('');
        // Refresh entries
        setTimeout(() => {
          fetchEntries();
          setSuccess('');
        }, 2000);
      } else {
        setError(data.error || 'Failed to add entry');
      }
    } catch {
      setError('Failed to add entry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <HyperCardNav />
      <main>
        <h1 className="text-3xl font-bold mb-2">Guestbook</h1>
        <hr className="border-t-2 border-black mb-6" />

        <HyperCardField className="mb-6">
          <h2 className="text-lg font-bold mb-2">Sign My Guestbook!</h2>
          <p className="text-sm mb-4 leading-relaxed">
            Leave a message in my guestbook. It's like the old days of the web!
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-bold mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={50}
                className="w-full border-2 border-gray-400 p-2 text-sm"
                placeholder="Your name"
                style={{
                  boxShadow: 'inset 2px 2px 0px #888888, inset -1px -1px 0px #FFFFFF'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={500}
                className="w-full border-2 border-gray-400 p-2 text-sm h-24 resize-none"
                placeholder="Leave your message here..."
                style={{
                  boxShadow: 'inset 2px 2px 0px #888888, inset -1px -1px 0px #FFFFFF'
                }}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-600">{success}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="hypercard-button"
            >
              {submitting ? 'Submitting...' : 'Sign Guestbook'}
            </button>
          </form>
        </HyperCardField>

        <div>
          <h2 className="text-xl font-bold mb-4">
            Recent Entries ({entries.length})
          </h2>

          {loading ? (
            <p className="text-sm text-gray-600">Loading entries...</p>
          ) : entries.length === 0 ? (
            <HyperCardField>
              <p className="text-sm text-gray-600">
                No entries yet. Be the first to sign!
              </p>
            </HyperCardField>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <HyperCardField key={entry.id}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-sm">{entry.name}</span>
                    <span className="text-xs text-gray-600">{entry.date}</span>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {entry.message}
                  </p>
                </HyperCardField>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
