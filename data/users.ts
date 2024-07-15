const users = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    password: 'password1234',
  },
  { id: 2, name: 'Bob', email: 'bob@example.com', password: 'secret' },
  {
    id: 3,
    name: 'Charlie',
    email: 'charlie@example.com',
    password: 'qwerty123',
  },
]

export const getUserByEmail = (email: string) => {
  return users.find(user => user.email === email)
}
