import { Request,Response } from "express";


const users=[
    {name:"Kayo",email:"Kayoweiber@gmail.com"}
]

export default {
    async index(req:Request,res:Response){
        return res.json(users)
    }
};

