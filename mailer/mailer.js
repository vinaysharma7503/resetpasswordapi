const nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        api_key: ''
    }
}
var mailer = nodemailer.createTransport(sgTransport(options));


 
exports.sendEmail = (email, emailSubject, resetCode, username)=> {

    var mailOptions = {
        from: "vinaysharma.7503@gmail.com",
        to: email,
        subject: emailSubject,
        // text: 'That was easy!'
        html: HTMLMailFormat(username,resetCode)
    };
    //console.log(transporter);
    mailer.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent Sucessfully');
        }
    });
}


function HTMLMailFormat(username, resetCode ){
    return (`<div style='margin: 0; padding: 0; min-height: 100%; width: 100%'>
    <table align = 'center' style = 'background-color: #f4f4f2; width: 100%; border-collapse: collapse' border = '0' cellpadding = '0' cellspacing = '0' >
        <tbody>
            <tr>
                <td>
                    <table align='center' border='0' cellpadding='0' cellspacing='0' style='max-width: 100%; min-width: 600px; border-collapse: collapse'>
                        <tbody>
                            <tr>
                                <td>
                                    <table border='0' cellpadding='20' cellspacing='0' width='100%' style='border-collapse: collapse'>
                                        <tbody>
                                            <tr>
                                                <td colspan='2' align='center' style='padding-left: 22px; padding-right: 22px;padding-bottom: 12px;padding-top: 12px;border: solid 1px #c8c8c8; background-color: white; color: white; border-radius: 5px 5px 0 0;'>
                                                    <img src="" width='55px' height='auto' style='vertical-align: middle;'>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <table align='center' style='background-color: #f4f4f2; width: 100%; border-collapse: collapse' border='0' cellpadding='0' cellspacing='0'>
        <tbody>
            <tr>
                <td>
                    <table align='center' border='0' cellpadding='0' cellspacing='0' style='width: 600px; border-collapse: collapse'>
                        <tbody>
                            <tr>
                                <td>
                                    <table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: white; border-radius: 0 0 5px 5px; margin-bottom: 15px; border: solid 1px #c8c8c8; border-top: none; border-collapse: collapse'>
                                        <tbody>
                                            <tr>
                                                <td colspan='2' style='padding-top: 22px; padding-left: 22px; padding-right: 22px'>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 15px; line-height: 18px; color: #2d2d2a; margin-top: 0;'>Hello ${username},</p>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 15px; line-height: 18px; color: #2d2d2a; margin-top: 0; margin-bottom: 20px;'>
                                                        You have requested to reset your password. Please use the below code to verify your request and reset the password.
                                                    </p>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 15px; line-height: 18px; color: #2d2d2a; margin-top: 0; margin-bottom: 20px'>
                                                        Your verification code is: <b>${resetCode}</b>
                                                    </p>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 15px; line-height: 18px; color: #2d2d2a; margin-top: 40px; margin-bottom: 10px'>Sincerely, <br>
                                                        Agicent App Team
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table width='100%' style='border-collapse: collapse'>
                                        <tbody>
                                            <tr>
                                                <td colspan='2' align='center'>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 11px; line-height: 18px; color: #2d2d2a; margin-top: 0; margin-bottom: 8px; border-bottom: solid 1px #c8c8c8; padding-bottom: 8px'>
                                                        For help with any of our services, please email our customer support:<br>
                                                            <a href='#'>support@Agicent.com</a>
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align='center'>
                                                    <p style='font-family: Helvetica Neue,Arial,sans-serif; font-size: 11px; line-height: 18px; color: #2d2d2a; margin-top: 0; margin-bottom: 8px'>
                                                        © 2020, Agicent. All rights reserved.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <div class='yj6qo'></div>
    <div class='adL'></div>
 </div>`)
 }


