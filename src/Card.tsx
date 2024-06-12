import { User } from "./types"

interface Props {
    user: User
    setSelectedUser: Function
}

const Card: React.FC<Props> = ({
    user,
    setSelectedUser
}) => {
    return (
        <div key={user.id} className="flex-col m-2 w-96">
            <div className="block bg-stone-50 rounded-3xl rounded-bl-none w-15">
                <div className="block p-6 bg-blue-600 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl flex justify-center">
                    <div className="rounded-full bg-stone-50 border-blue-600 border-4 outline outline-white outline-4 my-4 w-32 h-32 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                </div>
            </div>
            <div className="block bg-blue-600 rounded-2xl rounded-tr-none">
                <div className="block p-6 bg-stone-50 rounded-2xl rounded-tl-none flex justify-center">
                    <div className="flex flex-col">
                        <div className="font-bold text-lg text-gray">
                            {user.firstname + " " + user.lastname}
                        </div>
                        <button className="justify-center text-blue-600 font-bold" onClick={()=>{setSelectedUser(user)}}>
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Card