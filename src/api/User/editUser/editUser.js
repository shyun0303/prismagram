import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default{
    Mutation:{
        editUser: async(_,args,{request})=>{
            isAuthenticated(request);
            const {username, email, firstname, lastname, bio}=args;
            const {user} = request;
            return prisma.updateUser({where:{id : user.id}, data:{
                username, email, firstname, lastname, bio
            }})
        }
    }
}