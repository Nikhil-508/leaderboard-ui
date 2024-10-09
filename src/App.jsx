import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import LeaderBoard from '../Components/leaderboard'
import Adduser from '../Components/Adduser';
import ShowUserRank from '../Components/ShowUserRank';
import EditUser from '../Components/EditUser';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= '/' element={<LeaderBoard/>}/> 
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/showUserRank/:id' element={<ShowUserRank/>}/>
        <Route path='/updateUser/:id' element={<EditUser/>}/>
      </Routes>
    </Router>
  )
}

export default App
