import { User } from "./types"

function Card(user: User) {
    return (
        <div key={user.id} className="flex-col m-2 w-96">
            <div className="block bg-stone-50 rounded-3xl rounded-bl-none w-15">
                <div className="block p-6 bg-blue-600 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">
                        {user.username}
                    </h1>
                </div>
            </div>
            <div className="block bg-blue-600 rounded-2xl rounded-tr-none">
                <div className="block p-6 bg-stone-50 rounded-2xl rounded-tl-none">
                    <p className="font-normal text-gray">
                        {user.firstname + "" + user.lastname}
                    </p>
                </div>
            </div>
        </div>
    )
  }

export default Card