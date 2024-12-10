import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { dbClient } from "@/shared/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const nextAuthConfig: NextAuthOptions = {
  adapter: PrismaAdapter(dbClient),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};
