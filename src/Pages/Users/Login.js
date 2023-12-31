import React, { useState } from 'react'
import { Button,InputAdornment,TextField,Typography } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../Styles/Log_Sign/log_sign.css'
import { LogInHook } from '../../Hooks/LogInHook';
import {useNavigate} from 'react-router-dom'
import LoadingMui from '../../Components/LoadingMui';

export default function SignUp() {
  const [gmail,setGmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPass,setShowPass] = useState(true)
  const {logInUser,errors}  = LogInHook()
  // Loading
  const [loading,setLoading] = useState(null)

  // Get From Hook
  const navigate = useNavigate()

 // Log In
 const logInFunc = async () => {
  setLoading(true)
await logInUser(gmail,password)
setLoading(false)
 }
  return (
    <>
    <div className='loginM'>
<form className='logInForm'>
<center><Typography sx={{fontSize:{xs:"27px",md:'32px',lg:'35px'}}}>Login To Your Account</Typography></center>
  <TextField
    type='text'
    id="gmail"
    label="Gmail"
    value={gmail}
    onChange={(e)=>setGmail(e.target.value)}
    variant='standard'
    autoComplete="off"
    sx={{width:{xs:'90%',sm:'70%',md:'40%'}}}
    InputProps={{
      style:{
        fontSize:'x-large'
      }
    }}
  />
  <TextField
    type={showPass?'password':'text'}
    id="password"
    autoComplete="off"
    label="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    variant='standard'
    sx={{width:{xs:'90%',sm:'70%',md:'40%'}}}
    InputProps={{
      style:{
        fontSize:'x-large'
      },
      endAdornment:(
        <InputAdornment position='end' onClick={()=>setShowPass(e=>!e)} style={{cursor:'pointer'}}>
          {showPass?<VisibilityOffIcon/>:<VisibilityIcon />}
        </InputAdornment>
      )
    }}
  />
  <Button
  disableElevation
  disableTouchRipple
  onClick={logInFunc}
  sx={{
    bgcolor:'rgb(53, 117, 226)',
    color:'white',
    padding:'10px 20%',
    transition:'0.2s',
    '&:hover':{bgcolor:'rgb(57, 126, 245)'}
  }}
  >Log In</Button>
  {errors && <center><Typography color='error' variant='h5'>{errors}</Typography></center>}
  <div className='line' style={{width:'30%'}}></div>
  <Typography sx={{fontSize:'x-large'}}>Forget Password ? </Typography>
  <Button variant='outlined' color='error' sx={{fontSize:'large'}} onClick={()=>navigate('/forgetpassword')}>Click Here To Reset Password</Button>
</form>
<div className='SignPage'>
<Typography variant='h4'>New Here?</Typography>
<Typography variant='h6'>Sign up and post new jobs</Typography>
<Button onClick={()=>navigate('/signup')} variant='contained' sx={{
    bgcolor:'white',
    color:'black',
    padding:'10px 20%',
    transition:'0.2s',
    '&:hover':{bgcolor:'white'}
  }}>Sign Up</Button>
</div>
</div>
<div className='minSignUp' onClick={()=>navigate('/signup')}>SignUp</div>
{/* Loading */}
<LoadingMui loading={loading} />
</>
  )
}
