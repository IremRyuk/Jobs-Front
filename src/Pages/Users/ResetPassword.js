import {Stack,TextField,Button} from '@mui/material'
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'


export default function ResetPassword() {
  const {id,token} = useParams()
  const [password,setPass] =  useState('')
  const changePassword = async () => {
    const response = await fetch(`https://jobs-2dwq.onrender.com/forgetpassword/${id}/${token}`,{
      method:"POST",
      body:JSON.stringify({password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if(!response){
      alert('Problem')
    }else{
      alert('Success')
    }
  }
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      <TextField 
      variant='outlined'
      placeholder='type new password'
      value={password}
      onChange={(e)=>setPass(e.target.value)}
      />
        <Button onClick={changePassword}>Submit</Button>
    </Stack>
  )
}
