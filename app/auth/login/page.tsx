'use client'

import { handleSignIn } from '@/app/api/action'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const handleFormSubmit = async (event: any) => {
    event.preventDefault()

    try {
      const formData = new FormData(event.currentTarget)

      const response = await handleSignIn(formData)

      if (response.error) {
      } else {
        router.push('/home')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 text-gray-700 rounded-md focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 text-gray-700 rounded-md focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="my-2">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
