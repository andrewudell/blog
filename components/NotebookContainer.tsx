import React from 'react';

export default function NotebookContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="notebook-page">
      <div className="notebook-content">
        {children}
      </div>
    </div>
  );
}
