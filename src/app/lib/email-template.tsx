import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({ firstName, email, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Message from {firstName}</h1>
      {email && (
        <p>
          <strong>Reply to:</strong> {email}
        </p>
      )}
      {message && (
        <div>
          <h2>Content:</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}