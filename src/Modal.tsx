import { User } from "./types"

interface Props {
    user: User
    setSelectedUser: Function
}

const Modal: React.FC<Props> = ({
    user,
    setSelectedUser
}) => {
    return (
        <>
        <div className="fixed top-0 h-screen w-screen z-2 opacity-50 bg-indigo-500 overflow-auto"/>   
        <div className="text-2xl rounded-3xl absolute top-0 left-0 z-7 bg-white h-1/2 w-1/2 translate-y-1/2 translate-x-1/2 border-gray-300 border-4">
        <div onClick={()=>{setSelectedUser(null)}} className="cursor-pointer fixed right-6 top-4 font-bold text-xl">X</div>
            <div  className="w-full h-full overflow-scroll">
            <div className="mt-12 mx-12">
            <div className="rounded-full mr-3 bg-stone-50 border-gray-300 border-4 w-28 h-28 bg-no-repeat bg-contain block float-right" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                <div className="text-3xl font-bold mb-3">{user.firstname + " " + user.lastname}</div>
                <div><span className="font-bold">Username: </span>{user.username}</div>
                <div><span className="font-bold">Role: </span>{user.role}</div>
                <div><span className="font-bold">Email: </span>{user.email}</div>
                <div><span className="font-bold">Join Date: </span>{user.join_date}</div>
                <div className="mt-3 mb-6"><span className="font-bold">Description: </span>{user.description}</div>
            </div> 
            </div>
        </div>
     </>
    )
}

export default Modal