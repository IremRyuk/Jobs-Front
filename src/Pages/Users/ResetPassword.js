import { TextField,Stack,Button,Box,Typography,InputAdornment} from '@mui/material'
import React, {useState,useEffect} from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useNavigate, useParams} from 'react-router-dom'
import LoadingMui from '../../Components/LoadingMui';


export default function ResetPassword() {
  const {id,token} = useParams()
  const [password,setPass] =  useState('')
  const [status,setStatus] = useState(null)
  const [color,setColor] = useState('red')
  const [types,setTypes] = useState(false)
  const [changed,setChanged] = useState(false)
  // Loading
  const [loading,setLoading] = useState(null)
// Navigation
const navigate = useNavigate()

  const changePassword = async () => {
    setLoading(true)
    const response = await fetch(`https://jobs-2dwq.onrender.com/forgetpassword/${id}/${token}`,{
      method:"POST",
      body:JSON.stringify({password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json = await response.json()
    setStatus(json)
    setLoading(false)
  }

// Mui Styles
  const forgetTyp = {
    fontSize:{xs:'25px',md:'32px',xl:'35px'},
    fontWeight:{xs:200,md:500,xl:700},
    textAlign:'center'
  }
  const errorTyp = {
    fontSize:{xs:'25px',md:'35px'},
    fontWeight:{xs:400,md:500,xl:400},
    color:color
  }
  useEffect(()=>{
    if(!status){
      return
    }else{
      if(status.St2===true){
        setColor('green')
        setTimeout(() => {
          setChanged(true)
        }, 1000);
      }else{
        setColor('red')
      }
    }
  },[status])
  return (
    <>
    {changed
    ?
    <>
    <Stack
    direction='column' 
    justifyContent='center'
    alignItems='center'
    sx={{
      display:'flex',
      width:'100vw',
      height:'80vh'
    }}
    >
            <Stack
    direction='column' 
    justifyContent='center'
    alignItems='center'
    gap='20px'
    boxShadow='0px 0px 10px gray'
    borderRadius='10mm'
    sx={{
      width:{xs:'90vw',sm:'80vw',lg:'fit-content'},
      height:{xs:'70vh',sm:'50vh',md:'40vh'},
      padding:{xs:'10px',sm:'20px 25px',md:'15px 100px'}
    }}
      >
    <Typography sx={forgetTyp}>Click Here To Go Home Page</Typography>
    <Button 
    variant='contained'
    color='primary'
    sx={{
    fontSize:{xs:'25px',md:'35px'},
    fontWeight:{xs:400,md:500,xl:400},
    }} 
    onClick={()=>navigate('/')}>Home Page</Button>
    </Stack>
    </Stack>
    </>
    :<Box
    justifyContent='center'
    alignItems='center'
    sx={{
      display:'flex',
      width:'100vw',
      height:'80vh'
    }}
    >
      <Stack
    direction='column' 
    justifyContent='space-evenly'
    alignItems='center'
    boxShadow='0px 0px 20px silver'
    borderRadius='10mm'
    sx={{
      width:{xs:'90vw',sm:'80vw',lg:'fit-content'},
      height:{xs:'70vh',sm:'50vh',md:'50vh'},
      padding:{xs:'20px',sm:'40px 50px',md:'30px 100px'}
    }}
      >
        <Typography sx={forgetTyp}>Reset Password</Typography>
        <TextField 
        type={types?'text':'password'}
        placeholder='type...'
        variant='outlined'
        label='Password'
        autoComplete='off'
        value={password}
        onChange={(e)=>setPass(e.target.value)}
        sx={{
            width:{xs:'100%',md:'40vw',xl:'25vw'}
        }}
        InputProps={{
          style:{
fontSize:'large'
          },
          endAdornment:(
            <InputAdornment position='end' onClick={()=>setTypes(e=>!e)} style={{cursor:'pointer'}}>
              {types?<VisibilityOffIcon/>:<VisibilityIcon />}
            </InputAdornment>
          )
        }}
        />
        <Button 
        onClick={changePassword}
        disableTouchRipple
        variant='contained'
        sx={{
          fontSize:{xs:'15px',md:'17px',xl:'20px'},
width:{xs:'40vw',md:'30vw',xl:'20vw'}
        }}
        >Submit</Button>
{status && <>
<Typography sx={errorTyp}>{status.Status}</Typography>
</>}
        </Stack>
    </Box>
  }
      {/* Loading */}
<LoadingMui loading={loading} />
  </>
  )
}
