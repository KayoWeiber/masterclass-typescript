interface IMailTO{
    name:string;
    email:string;

}
interface IMailMessage{
    subject:string;
    body:string;
    attachment?:string[]
}


class EmailService{
    sendMail(to:IMailTO, message:IMailMessage){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);

    }

}

export default EmailService;