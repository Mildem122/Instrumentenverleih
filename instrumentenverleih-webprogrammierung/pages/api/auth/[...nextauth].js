import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
//import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { User } from "@prisma/client";
import prisma from "../../../lib/prisma.ts";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    newUser: "/auth/new-user", // New users will be directed here on first sign in
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user?.id;
      session.user.adress = user?.adress;
      return session;
    },
  },
});
