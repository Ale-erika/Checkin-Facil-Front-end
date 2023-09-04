import nodemailer from "nodemailer";

function sendLink(email) {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "94aab682f71385",
      pass: "7de321d315fc31",
    },
  });

  var message = {
    from: "noreplay@pousadaX.com.br",
    to: email,
    subject: "Check-in Fácil - Pousada XPTO",
    text: "Estamos confirmando sua reserva. Será um prazer recebê-la como nossa hóspede!",
    html: "<h1>Olá, Ricardo,</h1><p>Viagem à vista!!!</p><p>Estamos ansiosos pela sua chegada!</p><p>E pensando no seu conforto e celeridade do seu check-in, enviamos o linkabaixo para que você preencha a sua ficha de hospedagem de forma online e,possa aproveitar a sua estadia conosco da melhor forma possível.</p><p><u>Ficha de hospedagem</u></p>",
  };

  transport.sendMail(message);
}

export default sendLink;
