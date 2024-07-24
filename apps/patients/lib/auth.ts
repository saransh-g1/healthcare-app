import SignIn from "../app/signin/page";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import {prisma} from "../../../packages/db"


interface doc{
  id: number;
  name: string;
  email: string;
  password: string;
}
const cookiePrefix="anyname"

export const  NEXT_AUTH_CONFIG={
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            name: {label: 'name', type: 'text', placeholder: '' },
            email: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },

          },
          async authorize(credentials: any) {
            console.log(credentials)
            let id=""
            if(credentials.page==="signup"){
              console.log("hi")
              try{
            const  res= await prisma.user.create({
                data:{
                  name: credentials.name,
                  email: credentials.username,
                  password: credentials.password,
                }
              })
              id=res.id.toString();
              console.log(res);
            }catch(e){
              console.log(e)
            }
            
            }else{
             const resp= await prisma.user.findFirst({
              where:{
                email: credentials.username
              },

             })
             if(resp!=null){
              if(resp.password===credentials.password){
              id=resp?.id.toString()
              credentials.name=resp.name
              }
            }
          }
             if(id===""){
               return null
             }else{
               return {
                  id,
                  email:credentials.username,
                  name: credentials.name
               };
            }
          },
        })
    ], 
    cookies: {

       sessionToken: {
        name: `${cookiePrefix}-next-auth.doctor-session-token`,
        options: {
          httpOnly: true,
          sameSite: 'lax',
          path: '/',
          secure: false
        }
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    pages: {
      signIn: '/signup',
      
    },
  }satisfies NextAuthOptions;

