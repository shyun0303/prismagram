import "./env";
import { GraphQLServer } from "graphql-yoga";
import {prisma} from "../generated/prisma-client"
import logger from "morgan";
import schema from "./schema";
import {sendSecretMail} from "./utills";
import passport from "passport";
import "./passport"
import { authenticateJwt } from "./passport";


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema, 
    context:({request})=>({request})
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);


server.start({port: PORT}, ()=> console.log(`Server running on port https://localhost:${PORT}`));