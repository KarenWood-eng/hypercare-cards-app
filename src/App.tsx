import { useState, useEffect } from "react"
import { User, UserData} from "./types"
import Card from "./Card"

async function fetchUsers(): Promise<UserData> {
  const response = await fetch('https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users')
  const data = await response.json()
  return data;
}

function App() {

  const [users, setUsers] = useState<User[]>([])

  const [error, setError] = useState<string | null>(null)

  const [loading, setLoding] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUsers()
        setUsers(userData.data.users)
      } catch (e: any) {
        setError(e.message)
      } finally{
        setLoding(false)
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading!!!!!!</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="bg-gray-300">
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
         Card(user)
        ))}
      </div>
    </div>
  )

}

export default App
