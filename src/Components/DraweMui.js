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
      // Mui Styling
      const UserTypog = {
        width:'95%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontSize:'17px'
      }
  return (
    <>
    <IconButton onClick={()=>setIsOpen(true)}>
        <MenuIcon sx={{fontSize:'xx-large'}} color='primary'/>
    </IconButton>
    <Drawer open={open} onClose={()=>setIsOpen(false)} anchor='right'>
        <Box sx={{width:{xs:'230px',sm:'250px'}}} height='100%' bgcolor='#e8e8e8' display='flex' flexDirection='column'>
              {/* User Gmail */}
  {!users && 
  <Stack direction = 'row' sx={{flexGrow:'1'}} justifyContent='space-around' alignItems='center' backgroundColor='#b4b4b4'>
    <Button variant='contained' color='primary' sx={{width:'45%',padding:'7px 0px'}} onClick={()=>navigate('/login')}>Log in</Button>
    <Button variant='contained' sx={{width:'45%',padding:'7px 0px',bgcolor:'#138693'}} onClick={()=>navigate('/signup')}>Sign up</Button>
  </Stack>
  }
{/* Links */}
<Stack 
  direction='column' 
  spacing={5} 
  justifyContent='flex-start' 
  alignItems='center' 
  fontWeight='bold' 
  bgcolor='#b4b4b4'
  padding='20px 0px'
  sx={{flexGrow:1}}
  >
<Typography variant='h5' sx={{width:'100%',textAlign:'center',padding:'25px 10px'}} onClick={()=>navigate('/')}>Home</Typography>
  <div className='line'></div>
  <Typography variant='h5' sx={{width:'100%',textAlign:'center',padding:'25px 10px'}} onClick={()=>navigate('/createjob')}>Create Job</Typography>
  <div className='line'></div>
  <Typography variant='h5' sx={{width:'100%',textAlign:'center',padding:'25px 10px'}} onClick={()=>navigate('/myjobs')}>My Jobs</Typography>
  </Stack>
  
   {/* Log Out Button */}
  {users &&
  <Stack padding='20px 0px' spacing={2} justifyContent='center' alignItems='center' backgroundColor='#b4b4b4'>
  <Typography sx={UserTypog}>{users.gmail}</Typography>
  <Button variant='contained' color='error' sx={{width:"57%"}} onClick={LogOutFunct}>Log Out</Button>
  </Stack>
  }
        </Box>
    </Drawer>
    </>
  )
}
