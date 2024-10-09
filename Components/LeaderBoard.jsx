import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeaderBoard.css';
import { useNavigate } from 'react-router-dom';

const LeaderBoard = () => {
  const [leaderboard, setLeaderBoard] = useState([]);
  const navigate = useNavigate(); // Fixed spelling of 'navigate'

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/leaderboard');
        console.log(response.data, 'rssspnss');
        setLeaderBoard(response.data);
      } catch (error) {
        console.log('error in fetching leaderboard data', error);
      }
    };
    fetchUserData();
  }, []);

  const handleClick = () => {
    navigate('/adduser'); 
  };

  const showRank = (userId) => {
    navigate(`/showUserRank/${userId}`); 
  };
  
  const showEdit = (userId) => {
    navigate(`/editUser/${userId}`);
  }

  return (
    <div className='leaderboard'>
      <h2>Welcome to the Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user) => (
            <tr key={user._id}>
              <td onClick={() => showRank(user._id)}>{user.name}</td> 
              <td>{user.score}</td>
              <td><button onClick={() => showEdit(user._id)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleClick}>Add User</button>
      </div>
    </div>
  );
};

export default LeaderBoard;
