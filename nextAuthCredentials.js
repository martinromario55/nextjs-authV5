import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth'
import { getUserByEmail } from '@/data/users'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === null) return null

        try {
          // Fetch user from db and validate user input
          const user = getUserByEmail(credentials?.email)

          // check if user input password is the same as db user's password

          if (user) {
            const isMatch = user?.password === credentials?.password

            // Check if password matches
            if (isMatch) {
              return user
            } else {
              throw new Error('Invalid password')
            }
          } else {
            throw new Error('Invalid credentials')
          }
        } catch (error) {}
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
      }
      return session
    },
  },
})
