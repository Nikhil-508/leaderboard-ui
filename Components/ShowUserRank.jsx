import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/ShowUserRank.css'

const ShowUserRank = () => {
    const [user, setUser] = useState({ name: '', score: 0, rank: 0 });
    const { id } = useParams();
    console.log(id,'iddd');
    

    useEffect(() => {
        const fetchRank = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/user/showUserRank/${id}`);
                console.log(response.data, "dattaaa");
                setUser(response.data);
            } catch (error) {
                console.log('Not getting the rank', error);
            }
        };
        fetchRank();
    }, [id]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.score}</td>
                        <td>{user.rank}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowUserRank;
