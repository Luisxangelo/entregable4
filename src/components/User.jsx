const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {

    const handleClickDelete = () =>{
        deleteUser(user.id)
    }

    const handleClickUpdate = () => {
        
        changeShowModal();
        setIsUserToUpdate(user)
    }

  return (
    <article className="bg-bgmodal rounded-3xl p-4 max-h-[400px] max-w-[600px]">
        <div className="grid grid-flow-col">
        <h2 className="text-xl border-b-2 border-gray-400 text-center py-4 font-bold">{user.first_name} {user.last_name}</h2>
        <div className="text-right h-1/2 ">
        <button className="p-2" onClick={handleClickUpdate}><i className='bx bx-pencil bg-white w-11 h-11 p-[14px] rounded-lg'></i></button>
        <button className="p-2" onClick={handleClickDelete} ><i className='bx bx-trash bg-red-500 w-11 h-11 p-[13px] rounded-lg'></i></button>
        </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col grid-cols-2 text-left text-sm text-slate-200 gap-4 p-8">
         <h5>Correo: </h5>
            <span className="text-justify font-semibold">{user.email}</span>
            <h5><i className='bx bx-gift'></i>Cumpleaños: </h5>
            <span className="font-semibold">{user.birthday || "Sin Fecha"}</span>
        </div>
        
    </article>
  )
}

export default User