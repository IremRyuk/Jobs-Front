import React, { useState } from 'react'
import { Button,InputAdornment,TextField,Typography } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../Styles/Log_Sign/log_sign.css'
import {SignUpHook} from '../../Hooks/SignUpHook'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  // Navigate
const navigate = useNavigate()
  // Values
  const [gmail,setGmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPass,setShowPass] = useState(true)

  // Get From Hook
  const {SignUp,errors} = SignUpHook()

  let SignUpForm = async () => {  
      await SignUp(gmail,password)
  }

  return (
    <div className='signupBox'>
<center><form className='signUpForm'>
<center><Typography variant='h4'>Sign Up</Typography></center>
  <TextField
    type='text'
    id="gmail"
    label="Gmail"
    value={gmail}
    onChange={(e)=>setGmail(e.target.value)}
    variant='standard'
    autoComplete="off"
    sx={{width:'70%'}}
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
    sx={{width:'70%'}}
    InputProps={{
      style:{
        fontSize:'x-large'
      },
      endAdornment:(
        <InputAdornment position='end' onClick={()=>setShowPass(e=>!e)} style={{cursor:'pointer'}}>
          <VisibilityOffIcon/>
        </InputAdornment>
      )
    }}
  />
  <Button
  disableElevation
  disableTouchRipple
  onClick={SignUpForm}
  // disabled={loading}
  sx={{
    bgcolor:'rgb(53, 117, 226)',
    color:'white',
    padding:'10px 30%',
    transition:'0.2s',
    '&:hover':{bgcolor:'rgb(57, 126, 245)'}
  }}
  >Sign Up</Button>
  {errors && <center><Typography color='error' variant='h5'>{errors}</Typography></center>}
<div className='line'></div>
<Typography sx={{fontSize:'x-large'}}>Alerady User ? | <Button variant='outlined' sx={{fontSize:'large'}} onClick={()=>navigate('/login')}>Log In</Button></Typography>

</form></center>
</div>
  )
}
