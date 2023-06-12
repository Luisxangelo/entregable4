import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import UserList from './components/UserList'
import { data } from 'autoprefixer'


const BASE_URL="https://users-crud.academlo.tech"
const DEFAULT_VALUES = {
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  birthday:"",
}

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const changeShowModal = () => setIsShowModal(!isShowModal);

  const getAllUser = () =>{
      const url = `${BASE_URL}/users/`

      axios .get(url)
            .then(({data}) => setUsers(data))
            .catch((err)=> console.log(err))
  }

  const createUser = (data, reset) =>{
    const url = `${BASE_URL}/users/`

    axios .post(url, data)
         .then(() =>{ 
         getAllUser()
         resetModalForm(reset)
       })
         .catch((err)=> console.log(err))
  }

  const deleteUser = (id) => {
    const url = `${BASE_URL}/users/${id}/`

    axios .delete(url)
          .then(() =>getAllUser())
          .catch((err)=> console.log(err))

  }

  const updateUser = (data,reset) => {
    const url = `${BASE_URL}/users/${isUserToUpdate.id}/`

      axios .patch(url, data)
            .then(()=>{
              getAllUser()
              resetModalForm(reset)
            })
            .catch((err)=>console.log(err))

  }

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  useEffect(() => {
    getAllUser()
  }, [])
  

  return (
    <main className='font-["Roboto"] bg-black min-h-screen'>
      
      <Header changeShowModal={changeShowModal} />
      <ModalForm changeShowModal={changeShowModal} isShowModal={isShowModal} createUser={createUser} isUserToUpdate={isUserToUpdate} updateUser={updateUser} resetModalForm={resetModalForm}/>
      <UserList users={users} deleteUser={deleteUser} setIsUserToUpdate={setIsUserToUpdate} changeShowModal={changeShowModal} />
    </main>

  )
}

export default App
