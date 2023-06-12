const Header = ({changeShowModal}) => {

    const handleClickShowModal = () => {
        changeShowModal()
    }


  return (
    <section className='grid text-center grid-row-2 justify-center items-center  gap-4 p-4 pt-28 pb-24'>
        <h1 className='font-bold text-2xl text-fontcolor p-6'>Lista de Usuarios</h1>
        <button onClick={handleClickShowModal} className='bg-secondary text-primary p-2 rounded-lg shadow-md shadow-white w-72'>Crear Nuevo Usuario</button>
    </section>
  )
}

export default Header