//controllers
const indexCtrl = {};

import emailSend from "../helpers/emailSender";

//Aquí se colocan las funciones que realizan en cada peticion
indexCtrl.renderIndex = (req, res) => {
  res.render("index", {
    title: "yuem-pug",
    url: "Juanmahecha9",
  });
};

indexCtrl.renderForm = (req, res) => {
  res.render("sendEmail", {
    title: "Enviar correo",
    variable: "Este proyecto esta hecho con yuem, nodemailer, nodejs y pug",
  });
};

indexCtrl.renderEnviado = (req, res) => {
  const { name, mail, text } = req.body;
  const data = { Name: name, Mail: mail, Text: text };
  emailSend(data.Name, data.Mail, data.Text);
  res.render("enviado", {
    title: "Correo enviado",
    titulo: "Este correo ha sido enviado",
  });
};

//Exportar
module.exports = indexCtrl;
