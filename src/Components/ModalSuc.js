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
  sx={{
    width:{xs:'90vw',sm:'70vw',md:'40vw' },
    padding:{xs:'20px 5px',sm:'30px 20px'}
  }}
  height='fit-content' 
  display='flex' 
  justifyContent='center'
  alignItems='center'
  border='2px solid lime'
  backgroundColor= 'lime'
  boxShadow= '0px 0px 50px lime'
  padding='30px 20px'
  borderRadius='2.4mm'
  >
    <Typography sx={{fontSize:{xs:'20px',sm:'27px',lg:'30px'},fontWeight:'bold',color:'black'}}>Job Successfully Added</Typography>
  </Box>
</Modal>
  )
}
