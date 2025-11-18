import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: 'Strapi',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: "Password", type: 'password' }
      },

      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                identifier: credentials.email,
                password: credentials.password
              })
            }
          );

          const data = await res.json();

          if (!res.ok || !data.jwt) {
            throw new Error(data.error?.message || "Login failed");
          }

          return {
            id: data.user.id,
            name: data.user.username,
            email: data.user.email,
            jwt: data.jwt,
          };
        } catch (err) {
          throw new Error(err?.message || "Authorize failed");
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.jwt) { token.jwt = user.jwt; token.id = user.id; }
      return token;
    },
    async session({ session, token }) {
      if (token?.jwt) { session.jwt = token.jwt; session.user.id = token.id; }
      return session;
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

