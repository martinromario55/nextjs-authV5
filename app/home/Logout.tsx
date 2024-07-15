'use client'

import { useRouter } from 'next/navigation'
import { handleSignOut } from '../api/action'

const Logout = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await handleSignOut()
    router.push('/')
  }
  return (
    <button
      className="bg-blue-400 my-2 text-white p-1 rounded"
      type="submit"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logout
