import { User } from "./types"

interface Props {
    allUsers: User[]
    setUsers: Function
}

const SearchBar: React.FC<Props> = ({
    allUsers,
    setUsers
}) => {
    if (false) setUsers(null)

    function filterUsers(filterEvent: React.ChangeEvent<HTMLInputElement>): any {
        const filter = filterEvent.target.value
        const filterLength = filter.length
        if(filterLength > 2) {
            const filteredUsers = allUsers.reduce((accumulator: User[] ,user: User) => {
                (user.firstname.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || user.lastname.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) && accumulator.push(user)
                return accumulator
              }, [])
            setUsers(filteredUsers)
        } else {
            setUsers(allUsers)
        }
    }

    return (
        <input onChange={(filter) => {filterUsers(filter)}} placeholder="Search Users" className="w-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
    )
}

export default SearchBar
