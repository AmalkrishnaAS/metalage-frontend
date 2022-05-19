const nodemailer = require('nodemailer');
const nodeMailer = require('nodemailer');

//create an endpoint to accept data from the client and send email
exports.sendMail = function(req, res) {
    if(req.method === 'POST') {
    //create a transporter object
    // const body=JSON.parse(req.body);

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amalkrishna@gmail.com',
            pass: 'ysfcppvqffschuci'


}
    });


    //create a mail object
    const mailOptions = {
        from: 'amalkrishna02016@gmail.com',
        to: 'amalkrishna@',
        subject: 'test',
        text: 'test',
        html: `<h1>test</h1>`
    };

    //send the email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send(info.response);
        }
    });
}
};
