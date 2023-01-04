import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from '../../lib/prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "10984391466-mlggk9j7hpqidnqjcmn3srsta3jgnnj5.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)