import { Request,Response } from "express";
import EmailService from "../services/EmailService";

const users=[
    {name:"Kayo",email:"Kayoweiber@gmail.com"}
]

export default {
    async index(req:Request,res:Response){
        return res.json(users)
    },
    async create(req:Request, res:Response){
        const emailService = new EmailService();
        emailService.sendMail(
            {name: "Kayo Weiber", email: "kayoweiber@gmail.com"},
            {subject:"Bem vindo ao sistema", body:"Seja Bem vindo"}
        )
        return res.send()
    }
};

