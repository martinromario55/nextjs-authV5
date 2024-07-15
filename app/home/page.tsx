import { auth, signOut } from '@/nextAuthCredentials'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { handleSignOut } from '../api/action'
import Logout from './Logout'

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }
  return (
    <div>
      <h1>Welcome, {session.user.email}!</h1>
      <Logout />
    </div>
  )
}

export default HomePage
