import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Link href={'/auth/login'}>Login</Link>
    </div>
  )
}

export default page
