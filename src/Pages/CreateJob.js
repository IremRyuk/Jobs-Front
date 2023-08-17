import React,{useState} from 'react'
import '../Styles/CreateJob/createjob.css'
import {InputAdornment, Stack, TextField,Button,Select,MenuItem, FormControl} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import EmailIcon from '@mui/icons-material/Email';
import {useSelector} from 'react-redux'

export default function CreateJob() {
const [companyName,setCompanyName] = useState('')
const [position,setPosition] = useState('')
const [salary,setSalary] = useState('')
const [experience,setExperience] = useState('')
const [location,setLocation] = useState('office')
const [gmail,setGmail] = useState('')
const [description,setDescription] = useState('')
// Redux
const users = useSelector(data=>data.usersData)

const addNewJob = async (e) => {
    e.preventDefault()

if(!users){
    alert('You must be logged In')
    return
}

    const allJob = {companyName,position,salary,experience,location,gmail,description}
    const responce = await fetch('/usermenu/',{
method:'POST',
body:JSON.stringify(allJob),
headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${users.token}`
}
    })
    const newJobs = await responce.json()
    console.log(newJobs)
    if(responce.ok){
        alert('add new job')
    }
}

  return (
    <div className='create-job'>
        <p className='job-title'>Add New Job On <span style={{color:'rgb(53, 117, 226)'}}>JobsList</span></p>
        <div className='jobs-box'>
        <center><form className='job-form'>
            <TextField 
            value={companyName}
            onChange={(e)=>setCompanyName(e.target.value)}

            variant='outlined'
            sx={{width:'50%'}}
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
            sx={{width:'50%'}}
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
            sx={{width:'50%'}}
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
            sx={{width:'50%'}}
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
            sx={{width:'50%'}}
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
            width:'50%',
            }}>
            <Select
        label='Select Location'
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        startAdornment={
            <InputAdornment position="end">
              <PlaceIcon />
            </InputAdornment>
          }
        >
          <MenuItem value='office'>Office</MenuItem>
          <MenuItem value='remote'>Remote</MenuItem>
        </Select>
        </FormControl>

            {/* Description Area */}
            <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
             className='textarea' 
             placeholder='Description'
             >
            </textarea>


            {/* Add Job */}
            <Stack direction='row'>
                <Button>Clear</Button>
                <Button onClick={addNewJob}>Add Job</Button>
            </Stack>

        </form></center>
        </div>
    </div>
  )
}
