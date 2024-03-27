import axios from "axios";

export interface CreateUser{
    userName: string;
    email:String;
    password:String
}


const prefix = "user"
const version = "1"

export const userApi ={
    register: async(data: CreateUser) =>{
return await axios.post(`${import.meta.env.VITE_HOST}/api/v${version}/${prefix}`,data)
    }
}