import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  // This secret encrypts the session - strictly for development, use a real secret in production
  secret: process.env.NEXTAUTH_SECRET || "change_me_in_production", 
});

export { handler as GET, handler as POST };