import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST( req, res ) {
  const { email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
      </>
    ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
