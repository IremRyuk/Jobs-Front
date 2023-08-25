import React,{useEffect, useState} from 'react'
import '../Styles/CreateJob/createjob.css'
import {InputAdornment, Stack, TextField,Button,Select,MenuItem, FormControl} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import EmailIcon from '@mui/icons-material/Email';
import {useSelector} from 'react-redux'
import ModalSuc from '../Components/ModalSuc';

export default function CreateJob() {
const [companyName,setCompanyName] = useState('')
const [position,setPosition] = useState('')
const [salary,setSalary] = useState('')
const [experience,setExperience] = useState('')
const [location,setLocation] = useState('remote')
const [gmail,setGmail] = useState('')
const [description,setDescription] = useState('')
const [realLocation,setRLocation] = useState('remote')
const [modals,setModal] = useState(false)
// Redux
const users = useSelector(data=>data.usersData)
const clearAllInputs = () => {
    setCompanyName('')
    setPosition('')
    setSalary('')
    setExperience('')
    setLocation('')
    setGmail('')
    setDescription('')
    setRLocation('')
}
const addNewJob = async (e) => {
    e.preventDefault()

if(!users){
    alert('You must be logged In')
    return
}
    const allJob = {companyName,position,salary,experience,location,gmail,description}
    if(companyName === '' || position === '' || experience === '' || salary === '' || gmail === '' || description === '' ){
        alert('Please Fill Inpus')
    }else{
        const responce = await fetch('https://jobs-2dwq.onrender.com/usermenu/',{
            method:'POST',
            body:JSON.stringify(allJob),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${users.token}`
            }
                })
                if(!responce.ok){
                    alert('Problem')
                }
                if(responce.ok){
                    setModal(true)
                    setTimeout(()=>{
                        setModal(false)
                    },1500)
                    window.location.reload()
                }
    }
}
useEffect(()=>{
setLocation('')
},[realLocation])
  return (
    <>
    <div className='create-job'>
        <p className='job-title'>Add New Job On <span style={{color:'rgb(53, 117, 226)'}}>JobsList</span></p>
        <div className='jobs-box'>
        <center><form className='job-form'>
            <TextField 
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}

            variant='outlined'
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            label='Company Name' 
            type='text'
            placeholder='Name'
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <ApartmentIcon />
                    </InputAdornment>
                )
            }}
            />
            <TextField 
            value={position}
            onChange={(e)=>setPosition(e.target.value)}
            
            variant='outlined' 
            label='Client Position' 
            type='text'
            placeholder='Position'
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <BusinessCenterIcon />
                    </InputAdornment>
                )
            }}
            />

            <TextField
            value={salary}
            onChange={(e)=>setSalary(e.target.value)}
            
            variant='outlined' 
            label='Salary'
            placeholder='Dollar'
            type='number' 
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <PaidIcon />
                    </InputAdornment>
                )
            }}
            />

            <TextField
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
            
            variant='outlined' 
            label='Cleint Experience' 
            placeholder='Years Experience'
            type='Number' 
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <DateRangeIcon />
                    </InputAdornment>
                )
            }}
            />

            <TextField 
            value={gmail}
            onChange={(e)=>setGmail(e.target.value)}
            
            variant='outlined' 
            label='Company Gmail' 
            placeholder='Contact'
            type='mail' 
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <EmailIcon />
                    </InputAdornment>
                )
            }}
            />

            
            {/* Location */}
            <FormControl
             sx={{
                width:{xs:'90%',sm:'70%',md:'50%'}
            }}>
            <Select
        value={realLocation}
        onChange={(e)=>setRLocation(e.target.value)}
        startAdornment={
            <InputAdornment position="end">
              <PlaceIcon />
            </InputAdornment>
          }
        >
          <MenuItem value='remote'>Remote</MenuItem>
          <MenuItem value='office'>Office</MenuItem>
        </Select>
        </FormControl>
        {/* Custom Location */}
        {realLocation === 'office' && 
        <>
        <TextField 
            disabled={realLocation==='remote'?true:false}
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            
            variant='outlined' 
            label='Custom Location' 
            placeholder='Location'
            type='mail' 
            sx={{width:{xs:'90%',sm:'70%',md:'50%'}}}
            autoComplete='off'
            InputProps={{
                startAdornment:(
                    <InputAdornment position='start'>
                    <PlaceIcon />
                    </InputAdornment>
                )
            }}
            />
        </>}

            {/* Description Area */}
            <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
             className='textarea' 
             placeholder='Description'
             >
            </textarea>


            {/* Add Job */}
            <Stack direction='row' width='100%' justifyContent='center' alignItems='center' spacing={2} mb={2}>
                <Button 
                variant='outlined' 
                color='error' 
                sx={{
                    width:'fit-content',
                    padding:{xs:'10px 20px',sm:'10px 100px'}
                    }} 
                    onClick={clearAllInputs}
                >Clear</Button>
                <Button 
                variant='contained' 
                sx={{
                    bgcolor:'#41a0ff',
                    width:'fit-content',
                    padding:{xs:'10px 40px',sm:'10px 100px'},
                    '&:hover':{bgcolor:'#41a0ff'}
                    }} 
                    onClick={addNewJob}
                >Add Job</Button>
            </Stack>

        </form></center>
        </div>
    </div>
    <ModalSuc IsFalse={modals} />
    </>
  )
}
