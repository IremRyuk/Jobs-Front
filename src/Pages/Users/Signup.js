import React, { useState } from 'react'
import { Button,InputAdornment,TextField,Typography } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../../Styles/Log_Sign/log_sign.css'
import {SignUpHook} from '../../Hooks/SignUpHook'
import { useNavigate } from 'react-router-dom';
import LoadingMui from '../../Components/LoadingMui';

export default function SignUp() {
  // Navigate
  const navigate = useNavigate()
  // Values
  const [gmail,setGmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPass,setShowPass] = useState(true)
  // Loading
  const [loading,setLoading] = useState(null)

  // Get From Hook
  const {SignUp,errors} = SignUpHook()

  let SignUpForm = async () => {
      setLoading(true)
      await SignUp(gmail,password)
      setLoading(false)
  }

  return (
    <div className='signupBox'>
<center><form className='signUpForm'>
<center><Typography sx={{fontSize:{xs:"25px",sm:'30px',md:'35px',lg:'37px'}}}>Sign Up</Typography></center>
  <TextField
    type='text'
    id="gmail"
    label="Gmail"
    value={gmail}
    onChange={(e)=>setGmail(e.target.value)}
    variant='standard'
    autoComplete="off"
    sx={{width:{xs:'90%',sm:'85%',md:'80%'}}}
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
    sx={{width:{xs:'90%',sm:'85%',md:'80%'}}}
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
<Typography sx={{fontSize:'x-large'}}>Alerady User ? | <Button variant='text' sx={{fontSize:'large'}} onClick={()=>navigate('/login')}>Log In</Button></Typography>

</form></center>
{/* Loading */}
<LoadingMui loading={loading} />
</div>
  )
}
