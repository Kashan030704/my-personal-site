import * as React from 'react';
import {
  Container,
  Head,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({ firstName, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#000' }}>
            Message from {firstName}
          </Text>

          {email && (
            <Text style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
              <strong>Reply to:</strong> {email}
            </Text>
          )}

          {message && (
            <Section style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff', borderLeft: '4px solid #22c55e' }}>
              <Text style={{ fontSize: '16px', color: '#333', whiteSpace: 'pre-wrap' }}>
                {message}
              </Text>
            </Section>
          )}

          <Text style={{ fontSize: '12px', color: '#999', marginTop: '20px' }}>
            This message was sent from your website contact form.
          </Text>
        </Section>
      </Container>
    </Html>
  );
}