// import nodemailer from 'nodemailer';
// import mg from 'nodemailer-mailgun-transport';

// export default async function sendEmail(req, res) {
//   if (req.method === 'POST') {
//     const { name, surname, email, phone, message } = req.body;

//     // Mailgun configuration
//     const mailgunAuth = {
//       auth: {
//         api_key: 'def5ec2faf361567ce72e19000609684-19806d14-332dc19e',
//         domain: 'your-mailgun-domain',
//       }
//     };

//     const transporter = nodemailer.createTransport(mg(mailgunAuth));

//     const mailOptions = {
//       from: 'you@yourdomain.com', 
//       to: 'recipient@example.com',
//       subject: `New Message from ${name} ${surname}`,
//       text: `You have received a new message from:\n\nName: ${name} ${surname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
//     };

//     // Sending the email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         res.status(500).send('Error sending email');
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.status(200).send('Email successfully sent');
//       }
//     });
//   } else {
//     // Handle any non-POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
