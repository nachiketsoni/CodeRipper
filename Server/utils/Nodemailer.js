const nodemailer = require("nodemailer");
async function sendMail(receiver, text,subject, html ) {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: 'https://quickclean.onrender.com/api/v1/',
      port: 465,
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.MAILPASS,
      },
    });

    const mailOpts = {
      from: process.env.MAILUSER,
      to: receiver,
      subject: subject || "Cleanarth",
      text: "",
      html:
        html ||
        `
      <hr>
      <b><ol><li>This is a system generated mail. Please do not reply to this email ID. If you have a query or need any clarification you may: </li>
        <li> Call our 24-hour Customer Care or</li>
        <li>Email Us ${process.env.MAILUSER}</li>
        <ol></b>
        <hr>
        <br>

        <b>Dear Customer,</b> <br>

        <p>
        We hope this email finds you well. This email is to inform you that a one-time password has been generated for your account. This password is required to complete the secure login process and ensure the safety of your account information.
        <br> 
        <br> 
        <br> 
       <b> One-Time Password: ${text}<b>
        <br>
        <br>
        <br>
Please use this password within the next 10 minutes to log in to your account. After 10 minutes, the password will expire and you will need to request a new one.
<br>
If you did not request this password, please disregard this email and contact our support team immediately.
<br>
Thank you for your cooperation in keeping your account information secure.


        </p>

            <br>
            <br>
                
        Best Regards, <br>
        Cleanarth <br>

      `,
    };
    try{

        var result = await transport.sendMail(mailOpts);
    }catch(err){
        console.log(err);
    }
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = sendMail;
