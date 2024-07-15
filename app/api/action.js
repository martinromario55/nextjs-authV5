'use server'
import { signIn, signOut } from '@/nextAuthCredentials'
export async function handleSignIn(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    })
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export async function handleSignOut() {
  try {
    await signOut({ redirect: false })
  } catch (error) {
    throw new Error(error)
  }
}
