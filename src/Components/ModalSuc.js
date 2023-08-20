import React,{useEffect, useState} from 'react'
import {Modal,Box,Typography} from '@mui/material'


export default function ModalSuc({IsFalse}) {
  useEffect(()=>{
    setOpen(IsFalse)
  },[IsFalse])
  const [open,setOpen] = useState(false)
  const handleClose = () => {
setOpen(false)
  }
  return (
<Modal
  open={open}
  onClose={handleClose}
  sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100vw',
    height:'100vh'
  }}
>
  <Box 
  width='40vw' 
  height='fit-content' 
  display='flex' 
  justifyContent='center'
  alignItems='center'
  border='2px solid green' 
  color='black' 
  bgcolor='green'
  padding='30px 20px'
  borderRadius='2.4mm'
  >
    <Typography variant='h5' sx={{wontWeight:'bold'}} color='success'>Jobs SuccessFully Added</Typography>
  </Box>
</Modal>
  )
}
