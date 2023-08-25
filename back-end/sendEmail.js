import nodemailer from "nodemailer";

function sendEmail(email) {
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
    subject: "Confirmação do Check-in - Pousada XPTO",
    text: "Muito obrigada pelas suas informações. Seu foi check-in efetuado!",
    html: "<p>Muito obrigada pelas suas informações. Seu foi check-in foi efetuado com successo!</p><p>Para sua maior comodidade, vamos lhe passar algumas informações iniciais sobre a sua estadia.</p><p>O nosso horário de check-in é a partir das 14:00hs, mas caso o seu quarto fique disponível antes, providenciaremos a sua acomodação com a maior brevidade possível.</p><p>O café da manhã é servido entre 7:00 e 10:00&nbsp;hs.</p><p>A rede e senha wi-fi é: pousadaXPTO/1234</p><p>Seja bem-vindo! Desejamos que tenha uma excelente estada conosco!</p>",
  };

  transport.sendMail(message);
}

export default sendEmail;
