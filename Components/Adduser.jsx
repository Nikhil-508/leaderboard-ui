import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddUser.css'


const Adduser = () => {
    const [name,setName] = useState('')
    const [score, setScore] = useState(0)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault(); 
    
        try {
          const response = await axios.post('http://localhost:5000/user/addUser', {
            name,
            score: Number(score), 
          });
          console.log('User added successfully:', response.data);
          window.alert('user added successfully')
          setName('');
          setScore('');
          navigate('/')

        } catch (error) {
          console.error('Error adding user:', error);
        }
      };
  return (
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        placeholder='Enter the user name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="score">Score:</label>
      <input 
        type="number" 
        placeholder='Enter the user score'
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  </div>
  
  )
}

export default Adduser