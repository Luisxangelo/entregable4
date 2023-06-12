import { useEffect } from "react"
import { useForm } from "react-hook-form"

const ModalForm = ({isShowModal, createUser,isUserToUpdate, updateUser, resetModalForm}) => {



    const {register , handleSubmit, reset} = useForm()

    const submit =(data)=>{
         if(!data.birthday) data.birthday = null
         if(isUserToUpdate){
            updateUser(data, reset)
         }else{
              createUser(data,reset)
            }
    }

    const handleCloseModal = () => {
        resetModalForm(reset)
    }

    useEffect(() => {
        if(isUserToUpdate){
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])
    

  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-gray-600/50 grid place-content-center ${isShowModal? "visible opacity-100":"invisible opacity-0 transition-opacity"}`}>
         <img className="relative top-6 left-16 border-bgmodal border-4 rounded-full" src="/public/roundenimg.png" alt="" />
        <form onSubmit={handleSubmit(submit)} className="bg-bgmodal w-[280px] p-4 grid gap-6 relative rounded-2xl">
        
            <h3 className="font-bold text-3xl text-fontcolor text-center">{isUserToUpdate ? "Editar Usuario":"Nuevo Usuario"}</h3>

            <div className="grid gap-2">
                <label className="font-bold text-sm text-fontcolor" htmlFor="nombre">Nombre: </label>
                <input placeholder="Ingresa tu nombre...." className="bg-gray-500 outline-none p-2" id="nombre" type="text" 
                {...register("first_name")}
                />
            </div>

            <div className="grid gap-2">
                <label className="font-bold text-sm text-fontcolor" htmlFor="apellido">Apellido: </label>
                <input placeholder="Ingresa tu apellidos...." className="bg-gray-500 outline-none p-2" id="apellido"  type="text"
                {...register("last_name")}
                />
            </div>

            <div className="grid gap-2">
                <label className="font-bold text-sm text-fontcolor" htmlFor="email">Correo: </label>
                <input placeholder="Ingresa tu correo...." className="bg-gray-500 outline-none p-2" id="email" type="email"
                {...register("email")}
                />
            </div>

            <div className="grid gap-2">
                <label className="font-bold text-sm text-fontcolor" htmlFor="pass">Contraseña: </label>
                <input placeholder="Ingresa tu Contraseña...." className="bg-gray-500 outline-none p-2" id="pass" type="password"
                {...register("password")}
                />
            </div>

            <div className="grid gap-2">
                <label className="font-bold text-sm text-fontcolor" htmlFor="hb">Cumpleaños: </label>
                <input placeholder="Ingresa tu Cumpleaños...." className="bg-gray-500 outline-none p-2" id="hb" type="date" 
                {...register("birthday")}
                />
            </div>
            <button onClick={handleCloseModal} type="button" className="absolute top-2 right-2 text-2xl hover:text-secondary"><i className='bx bx-x'></i></button>
            <div className="flex gap-2">
            <button className='bg-secondary text-primary rounded-xl p-2 shadow-md shadow-white'>{isUserToUpdate ? "Guardar cambios":"Agregar nuevo usuario"}</button>
            <button onClick={handleCloseModal} type="button" className="bg-red-500 text-primary rounded-xl p-2 shadow-md shadow-white">Cancelar</button>
            </div>
        </form>
    </section>
  )
}

export default ModalForm