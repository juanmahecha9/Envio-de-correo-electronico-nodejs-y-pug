import nodemailer from "nodemailer";
const config = require("../private/emailData.json");

function emailSend(nombre, correo, texto) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  let mailOptions = {
    from: config.email,
    to: correo,
    subject: "Prueba Nodemailer",
    text: "Este correo fue enviado por : " + nombre + " " ,
    html: "<h1> EL MENSAJES ES: </h1> </br> <p>" + texto + "</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
}

module.exports = emailSend;
