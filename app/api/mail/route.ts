import { NextResponse } from 'next/server';
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(req: Request) {
  const body = await req.json();

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  
  const data = {
    to: "same-mail",
    from: "same-mail",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  try {
    await mail.send(data);
    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
