import React from 'react'
import {Stack,Snackbar,Alert} from '@mui/material'


export default function Alerts({IsInList,problem}) {
  return (
    <Stack spacing={2} justifyContent='center' alignItems='center'>
      <Snackbar open={IsInList} anchorOrigin={{ vertical:'bottom', horizontal:'center' }}  autoHideDuration={3000}>
      <Alert severity="error" sx={{width: 'fit-content',fontSize:'xx-large',display:'flex',justifyContent:'space-between',alignItems:'center'}}>{problem}</Alert>
      </Snackbar>
    </Stack>
  )
}
