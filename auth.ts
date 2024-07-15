// import CredentialsProvider from 'next-auth/providers/credentials'
// import NextAuth, { AuthOptions } from 'next-auth'
// import { getUserByEmail } from '@/data/users'
// import { NextApiRequest, NextApiResponse } from 'next'

// type User = {
//   id: string
//   email: string
//   password: string
//   // add other user properties here
// }

// type Credentials = {
//   email: string
//   password: string
// }

// const authOptions: AuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'email',
//           placeholder: 'your-email@example.com',
//         },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (!credentials) return null

//         try {
//           // Fetch user from db and validate user input
//           //   @ts-ignore
//           const user: User | null = await getUserByEmail(credentials.email)

//           if (user) {
//             const isMatch = user.password === credentials.password

//             // Check if password matches
//             if (isMatch) {
//               return user
//             } else {
//               throw new Error('Invalid password')
//             }
//           } else {
//             throw new Error('Invalid credentials')
//           }
//         } catch (error) {
//           console.error('Error in authorize function:', error)
//           throw new Error('Authentication failed')
//         }
//       },
//     }),
//   ],
// }

// export default function authHandler(req: NextApiRequest, res: NextApiResponse) {
//   return NextAuth(req, res, authOptions)
// }
// export const {
//   handlers: { GET, POST },
//   signIn,
//   signOut,
// } = NextAuth(authOptions)
