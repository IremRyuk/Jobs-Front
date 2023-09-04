import React,{ useState} from 'react'
import '../../Styles/Home/home.css'
import {Button, TextField, Autocomplete} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { DataJobsActFilteredData } from '../../Redux/action/DataJobsAct'
import $ from 'jquery'
import Alerts from '../../Components/Alert'
import PositionsMini from '../MicScreens/PositionsMini'
import FilterMini from '../MicScreens/FilterMini'

export default function Search() {
    const dispatch = useDispatch()
    const data = useSelector(res=>res.allData)
    const dataDefault = useSelector(res=>res.defaultData)
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

        
            $('.css-css-1qagdeh-MuiAutocomplete-root').css({border:'none'})
            $('.css-tat0eq-MuiFormControl-root-MuiTextField-root').css({border:'none'})
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
const positions = dataDefault?dataDefault.map(res=>res.position):'none'
const uniqPos = [...new Set(positions)]
// Locations
const locations = dataDefault?dataDefault.map(res=>res.location):'none'
const uniqLocs = [...new Set(locations)]
  return (
    <>
            {/* Titltes */}
    <center><div className='titles'>
<p className='title1'>Find your <span className='colored-title'>new job</span> today</p>
<p className='title2'>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>
</div></center>
    <div className='search'>
<div className='search-box'>
{/* Search Area */}
<div className='search-area'>
 <Autocomplete
 value={pos}
 onChange={(e,newE)=>setPos(newE)}
 freeSolo
 autoSelect
 options={uniqPos}
 size='large'
 sx={{
    width:{sm:'250px',md:'400px',xl:'700px'},
    height: 'min-content',
    border:'1px solid rgba(20, 20, 20, 0.10)',
    borderRadius: '4px 0 0 4px',
    padding:'5px',
    background: '#FFF',
    fontSize:'16px',
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
    width:{sm:'150px',md:'200px',lg:'350px',xl:'420px'},
    height: 'min-content',
    padding:'5px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid rgba(20, 20, 20, 0.10)',
    background: '#FFF',
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
<Button
onClick={FilterTop}

disableElevation
disableTouchRipple
variant='contained'
sx={{
    width: {sm:'170px',md:'220px',lg:'200px'},
    height: 'max-content',
    padding: '20px',
    fontSize:'15px',
    borderRadius: '4px 0 0 4px',
    background: '#3575E2'
}}
>Search Job</Button>

</div>
</div>
</div>
<div className='miniScreenSearch'>
<FilterMini />
<PositionsMini />
</div>
<Alerts IsInList={isJob} problem={problems}/>
    </>
  )
}
