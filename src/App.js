import {Routes,Route,Navigate} from 'react-router-dom'
import Nav from './Components/Nav';
import CreateJob from './Pages/CreateJob';
import Home from './Pages/Home';
import SingleJob from './Pages/SingleJob';
import SignUp from './Pages/Users/Signup';
import Login from './Pages/Users/Login';
import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { UserDataAct } from './Redux/action/UserDataAct';
import UserJobs from './Pages/UserJobs';
import Modify from './Pages/Modify';
import ErrorPage from './Pages/ErrorPage';
import GoTop from './Components/GoTop';
function App() {
  const dispatch = useDispatch()
  const users = useSelector(users=>users.usersData)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch(UserDataAct(user))
    }
  },[dispatch])
  return (
    <div>
      <Nav />
      <GoTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createjob' element={ users ? <CreateJob /> : <Navigate to='/login'/>} />
        <Route path='/singleJobs/:id' element={<SingleJob />} />
        {/* Users */}
        <Route path='/signup' element={ users ? <Navigate to='/' /> : <SignUp />} />
        <Route path='/login' element={ users ? <Navigate to='/' /> : <Login />} />
        <Route path='/myjobs' element={ users ? <UserJobs /> : <Navigate to='/login'/> } />
        <Route path='/modify/:id' element={ users ? <Modify /> : <Navigate to='/login'/> } />
        <Route path='*' element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
