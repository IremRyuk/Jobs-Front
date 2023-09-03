import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingMui({loading}) {
    const loadingOn = {
        position:'fixed',
        top:'0%',
        left:'0%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        height:'100vh',
        bgcolor:'#2424244d'
    }
  return (
    <>
    {loading && 
    <Box sx={loadingOn}>
    <CircularProgress />
    </Box>
    }
    </>
  )
}
