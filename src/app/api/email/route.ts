import { EmailTemplate } from '../../lib/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Check if API key is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return Response.json({ error: 'API key not configured' }, { status: 500 });
    }

    const { email, name, message } = await request.json();

    // basic validation
    if (!email || !name || !message) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const fromAddress = 'onboarding@resend.dev';
    const subject = `Website contact from ${name}`;

    console.log('Sending email:', { to: 'kashk2127@gmail.com', subject, email, name });

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      replyTo: email,
      to: ['kashk2127@gmail.com'],
      subject,
      react: EmailTemplate({
        firstName: name,
        email,
        message,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return Response.json(data);
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}