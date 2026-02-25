import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      event,
      nome,
      email,
      telefone,
      cpf,
      paymentId,
      recaptchaToken,
    } = body;

    // =========================
    // VALIDAR RECAPTCHA
    // =========================

    if (event === 'REGISTERED') {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA token ausente' },
          { status: 400 }
        );
      }

      const recaptchaRes = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        }
      );

      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success) {
        console.error('reCAPTCHA failed:', recaptchaData);
        return NextResponse.json(
          { error: 'Falha na verificação do reCAPTCHA' },
          { status: 403 }
        );
      }
    }


    // =========================
    // SMTP TRANSPORT
    // =========================

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    const to = 'gabriel@operion.com.br';

    let subject = '';
    let html = '';

    // =========================
    // TEMPLATES
    // =========================

    if (event === 'REGISTERED') {
      subject = '📝 Novo cadastro — Pagamento pendente';
      html = `
        <h2>Novo cadastro realizado</h2>
        <p><strong>Status:</strong> Pagamento pendente</p>
        <ul>
          <li><strong>Nome:</strong> ${nome}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${telefone}</li>
        </ul>
      `;
    }

    if (event === 'PIX_SELECTED') {
      subject = '💰 Pagamento via PIX selecionado';
      html = `
        <h2>PIX selecionado</h2>
        <p><strong>Status:</strong> Aguardando confirmação no Asaas</p>
        <ul>
          <li><strong>Nome:</strong> ${nome}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${telefone}</li>
          <li><strong>CPF:</strong> ${cpf}</li>
          <li><strong>ID Asaas:</strong> ${paymentId || 'N/A'}</li>
        </ul>
      `;
    }

    if (event === 'CARD_SELECTED') {
      subject = '💳 Pagamento via Cartão selecionado';
      html = `
        <h2>Cartão selecionado</h2>
        <p><strong>Status:</strong> Aguardando confirmação no Asaas</p>
        <ul>
          <li><strong>Nome:</strong> ${nome}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${telefone}</li>
          <li><strong>CPF:</strong> ${cpf}</li>
          <li><strong>ID Asaas:</strong> ${paymentId || 'N/A'}</li>
        </ul>
      `;
    }

    if (!subject) {
      return NextResponse.json(
        { error: 'Evento inválido' },
        { status: 400 }
      );
    }

    // =========================
    // SEND EMAIL
    // =========================

    await transporter.sendMail({
      from: `"Workshop Liderança" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    );
  }
}
