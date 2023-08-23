import React from 'react'
import {Stack,Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function ErrorPage() {
    const navigate = useNavigate()
  return (
    <Stack height='80vh' direction='column' justifyContent='center' gap='20px' alignItems='center'>
        <SentimentVeryDissatisfiedIcon sx={{color:'red',width:'30vw',height:'30vh'}} />
        <Typography variant='h4' color='error' sx={{textAlign:'center'}}>Page Not Found</Typography>
        <Button onClick={()=>navigate('/')} variant='contained' sx={{padding:'20px 30px'}}>Go Back To Home Page</Button>
    </Stack>
  )
}
