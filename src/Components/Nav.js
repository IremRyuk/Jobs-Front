import React from 'react'
import '../Styles/Navigation/nav.css'
import { useNavigate } from 'react-router-dom'
import { LogOut } from '../Hooks/LogOut'
import { useSelector } from 'react-redux'

export default function Nav() {
  // Redux
  const users = useSelector(res=>res.usersData)
  
  const navigate = useNavigate()
  const {LogOutUser} = LogOut()
  const LogOutFunct = () => {
    LogOutUser()
    window.location.reload()
  }
  return (
<nav className='nav'>
<div className='nav-menu'>

<div className='logo-name' onClick={()=>navigate('/')}>
  {/* Logo */}
<svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
  <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
  <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/>
</svg>
{/* Name */}
<p className='webname'>JobsList</p>
</div>

{/* Links */}
{users &&
  <ul className='list-links'>
  <li className='nav-links' onClick={()=>navigate('/createjob')}>Create Job</li>
  <li className='nav-links' onClick={()=>navigate('/myjobs')}>My Jobs</li>
</ul>
}


{/* Signup Login  */}

<div className='login-signup'>
  {!users && 
  <>
  <button className='login' onClick={()=>navigate('/login')}><p className='login-name'>Log in</p></button>
  <button className='signup' onClick={()=>navigate('/signup')}><p className='signup-name'>Sign up</p></button>
  </>}
  {/* Log Out Button */}
  {users && 
  <>
  <p>{users.gmail}</p>
  <button className='login' style={{background:'#ff3d3d',width:'fit-content'}} onClick={LogOutFunct}><p className='login-name'>Log Out</p></button>
  </>
  }
  </div>

</div>
</nav>
  )
}
