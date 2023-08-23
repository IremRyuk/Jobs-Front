import { Drawer,Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Button, TextField, Autocomplete} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { DataJobsActFilteredData } from '../../Redux/action/DataJobsAct'
import Alerts from '../../Components/Alert'

export default function PositionsMini() {
    // Drawer Settings
    const [posit,setPosit] = useState(false)
    // From Original Page
    const dispatch = useDispatch()
    const data = useSelector(res=>res.allData)
    const [pos,setPos] = useState(null)
    const [loc,setLoc] = useState(null)
    const [isJob,setIsJobs] = useState(false)
    const [problems,setProblem] = useState('')


// filter position and location
    const FilterTop = () => {
        // check if input are filled
        if(pos === null || loc === null){
            setIsJobs(true)
            setTimeout(()=>setIsJobs(false),3000)
            setProblem('Fill Position & Location')
        }else{

            let filtered =  data.filter(res=>{
                return res.position.toLowerCase() === pos.toLowerCase() && res.location.toLowerCase() === loc.toLowerCase()
            })

            // show alert 
            if(filtered.length === 0){
                setProblem('Job Not Found')
                setIsJobs(true)
                setTimeout(()=>setIsJobs(false),3000)
                return
            }

            //if everything ok?  set filtered data and hide alert
            if(filtered){
                dispatch(DataJobsActFilteredData(filtered))
            }
        }
}
// Positions
const positions = data?data.map(res=>res.position):'none'
const uniqPos = [...new Set(positions)]
// Locations
const locations = data?data.map(res=>res.location):'none'
const uniqLocs = [...new Set(locations)]
  return (
    <>
    <Button variant='contained' sx={{width:'30vw',margin:"0px 10px"}} onClick={()=>setPosit(true)}>Position</Button>
    <Drawer open={posit} onClose={()=>setPosit(false)} anchor='right'>
        <Box sx={{width:{xs:'250px',sm:'350px'},margin:'10px 0px',padding:'0px 10px',textAlign:'center'}}>
            <Typography variant='h4'>Search</Typography>
        <center><Autocomplete
 value={pos}
 onChange={(e,newE)=>setPos(newE)}
 freeSolo
 autoSelect
 options={uniqPos}
 size='large'
 sx={{
    width:'100%',
    height: 'min-content',
    border:'1px solid rgba(20, 20, 20, 0.10)',
    borderRadius: '4px 0 0 4px',
    padding:'5px',
    background: '#FFF',
    margin:'10px 0px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "none",   
    }
}}
 renderInput={(params)=>
 <TextField 
 {...params}
  placeholder='Positions...'
id='posid'
/>}
  />

<Autocomplete
 value={loc}
 onChange={(e,newE)=>setLoc(newE)}
 freeSolo
 autoSelect
 options={uniqLocs}
 size='large'
 sx={{
    width:'100%',
    height: 'min-content',
    padding:'5px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid rgba(20, 20, 20, 0.10)',
    background: '#FFF',
    margin:'10px 0px',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "none",   
    }
}}
 renderInput={(params)=>
 <TextField 
 {...params}
  placeholder='Locations...'
id='locid'
/>}
  />
  </center>
<Button
onClick={FilterTop}

disableElevation
disableTouchRipple
variant='contained'
sx={{
    width: '70%',
    height: 'max-content',
    padding: '10px',
    fontSize:'17px',
    borderRadius: '4px 0 0 4px',
    background: '#3575E2',
    margin:'10px'
}}
>Search Job</Button>
        </Box>
    </Drawer>
    <Alerts IsInList={isJob} problem={problems}/>
    </>
  )
}
