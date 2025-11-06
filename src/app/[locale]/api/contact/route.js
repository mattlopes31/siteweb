import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Site ENCOSYST <onboarding@resend.dev>',
      to: 'l.lopes@encosyst.fr',
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f97316; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background-color: white; padding: 30px; border: 1px solid #ddd; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #666; }
              .message-box { background-color: #f5f5f5; padding: 15px; border-left: 4px solid #f97316; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Nouveau message depuis le site ENCOSYST</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nom :</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email :</span> ${email}
                </div>
                <div class="field">
                  <span class="label">Téléphone :</span> ${phone || 'Non renseigné'}
                </div>
                <div class="field">
                  <span class="label">Message :</span>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}