import { TextField,Stack,Button } from '@mui/material'
import React, { useState } from 'react'

export default function ForgetPassword() {
    const [gmail,setGmail] = useState('')
    // Reset Password
    const resetPassword = async () => {
        const response = await fetch('https://jobs-2dwq.onrender.com/forgetpassword/',{
          method:'POST',
          body:JSON.stringify({gmail}),
          headers:{
            'Content-Type':'application/json',
          }
        })
        const json = await response.json()
        if(!response){
          console.log('Error')
        }else{
          console.log(json.Status)
        }
    }
    console.log(gmail)
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
        <TextField 
        placeholder='email'
        variant='outlined'
        value={gmail}
        onChange={(e)=>setGmail(e.target.value)}
        sx={{
            width:'70%'
        }}
        />
        <Button onClick={resetPassword}>Submit</Button>
    </Stack>

  )
}
