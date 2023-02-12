exports.SendSMS = async ( Text , sendTo) => {
    try{

     
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

  
    const resp =  await client.messages
      .create({
        body: Text,
        to: `+91${sendTo}`, // Text this number
        from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
      })
      return {response: resp, success : true, message : "OTP sent successfully"}
    }catch(err){
      return err
    }
  }