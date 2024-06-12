import { User } from "./types"

function Card(user: User) {
    return (
      <div key={user.id} className="block p-6 bg-blue-600 
              rounded-full">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        {user.username}
      </h1>
      <p className="font-normal text-white">
        {user.firstname + "" + user.lastname}
      </p>
  </div>
    )
  }

export default Card