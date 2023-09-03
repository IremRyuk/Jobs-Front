import { TextField,Stack,Button,Box,Typography } from '@mui/material'
import React, { useState , useEffect } from 'react'
import LoadingMui from '../../Components/LoadingMui';

export default function ForgetPassword() {
    const [gmail,setGmail] = useState('')
    const [status,setStatus] = useState(null)
    const [color,setColor] = useState('red')
    // Loading
    const [loading,setLoading] = useState(null)

    // Reset Password
    const resetPassword = async () => {
      setLoading(true)
        const response = await fetch('https://jobs-2dwq.onrender.com/forgetpassword/',{
          method:'POST',
          body:JSON.stringify({gmail}),
          headers:{
            'Content-Type':'application/json',
          }
        })
        const json = await response.json()
        setStatus(json)
        setLoading(false)
    }

// Mui Styles
    const forgetTyp = {
      fontSize:{xs:'25px',sm:'25px',md:'32px',xl:'35px'},
      fontWeight:{xs:200,md:500,xl:700}
    }
    const forgetTyp2 = {
      fontSize:{xs:'20px',sm:'20px',md:'27px',xl:'30px'},
      fontWeight:{xs:200,md:500,xl:400}
    }
    useEffect(()=>{
      if(!status){
        return
      }else{
        if(status.St2===true){
          setColor('green')
        }else{
          setColor('red')
        }
      }

    },[status])
    const errorTyp = {
      fontSize:{xs:'25px',md:'35px'},
      fontWeight:{xs:400,md:500,xl:400},
      color:color
    }
  return (
    <>
    <Box 
    display='flex'
    justifyContent='center'
    alignItems='center'
    sx={{
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
        <Typography sx={forgetTyp}>Forget Password</Typography>
        <Typography sx={forgetTyp2}>Please Fill Input With Your Gmail</Typography>
        <TextField 
        placeholder='type...'
        variant='outlined'
        label='Gmail'
        autoComplete='off'
        value={gmail}
        onChange={(e)=>setGmail(e.target.value)}
        sx={{
            width:{xs:'100%',md:'40vw',xl:'25vw'}
        }}
        />
        <Button 
        onClick={resetPassword}
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
    {/* Loading */}
<LoadingMui loading={loading} />
</>
  )
}
