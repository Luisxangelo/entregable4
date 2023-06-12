import User from "./User"

const UserList = ({users, deleteUser, changeShowModal, setIsUserToUpdate}) => {


  return (
    <section className="grid gap-6 justify-center ">
        {
            users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate}/>)
        }
    </section>
  )
}

export default UserList