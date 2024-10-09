import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {

  const [user, setUser] = useState({ name: '', score: 0, rank: 0 });

  const {id} = useParams()
  console.log(id,"useidddd");
  

  useEffect(() => {
    const editUser = async () => {
      try {

        const response = await axios.post(`http://localhost:5000/user/updateUser/${id}`)
        console.log(response.data, "editdednamee");
        setUser(response.data)
      } catch (error) {
        console.log(error,"eroorrr")
      }
    }

    editUser()
  },[id])



  return (
   <>
   <form action="">
    <label for="name">Edit Name:</label>
    <input type="text" name='name' value={user.name}/>
    <label for="">Edit score</label> 
    <input type="number" name="score" value={user.score}/>
   </form>
   </>
  )
}

export default EditUser
