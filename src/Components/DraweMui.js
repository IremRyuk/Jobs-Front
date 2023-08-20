import React, { useState } from 'react'
import {Drawer,Box, Typography,Stack,Button, IconButton} from '@mui/material'
import { useSelector } from 'react-redux'
import {LogOut} from '../Hooks/LogOut'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export default function DraweMui() {
    const [open,setIsOpen] = useState(false)
    // React-Router-Dom
    const navigate = useNavigate()
    // Redux
    const users = useSelector(res=>res.usersData)
    // Log Out Function
    const {LogOutUser} = LogOut()
    const LogOutFunct = () => {
        LogOutUser()
        window.location.reload()
      }
  return (
    <>
    <IconButton onClick={()=>setIsOpen(true)}>
        <MenuIcon sx={{fontSize:'xx-large'}} color='primary'/>
    </IconButton>
    <Drawer open={open} onClose={()=>setIsOpen(false)} anchor='right'>
        <Box sx={{width:{xs:'250px',sm:'350px'}}} height='100%' bgcolor='#e8e8e8'>
            {/* User Gmail */}
        {!users && 
  <Stack direction = 'row' mt={2} justifyContent='space-around' alignItems='center'>
  <Button variant='contained' color='warning' onClick={()=>navigate('/signup')}>Sign up</Button>
  <Button variant='contained' color='primary' onClick={()=>navigate('/login')}>Log in</Button>
  </Stack>
  }

  {/* Log Out Button */}
  {users && 
  <Stack mt={5} spacing={2} justifyContent='center' alignItems='center'>
  <Typography variant='h5'>{users.gmail}</Typography>
  <Button variant='contained' color='error' sx={{width:"40%"}} onClick={LogOutFunct}>Log Out</Button>
  </Stack>
  }


{/* Links */}
<Stack 
  direction='column' 
  spacing={5} 
  mt={10} 
  justifyContent='center' 
  alignItems='center' 
  fontWeight='bold' 
  bgcolor='#b4b4b4'
  padding='50px 0px'
  >
<Typography variant='h5' onClick={()=>navigate('/')}>Home</Typography>
  <div className='line'></div>
  <Typography variant='h5' onClick={()=>navigate('/createjob')}>Create Job</Typography>
  <div className='line'></div>
  <Typography variant='h5' onClick={()=>navigate('/myjobs')}>My Jobs</Typography>
  </Stack>
        </Box>
    </Drawer>
    </>
  )
}
