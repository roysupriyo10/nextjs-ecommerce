import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { env } from '@/lib/util-functions/env';
import prisma from '@/lib/db/prisma';
import { NextAuthOptions } from "next-auth";
import { Adapter } from 'next-auth/adapters';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    })
  ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
