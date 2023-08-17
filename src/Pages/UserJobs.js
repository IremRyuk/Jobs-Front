import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import '../Styles/AllJobs/allJobs.css'
import {Typography,Button,Stack,Box, DialogContentText, DialogTitle, DialogActions,Dialog, DialogContent } from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function UserJobs() {
    // Redux
    const user = useSelector(res=>res.usersData)
    // React-Router-Dom
    const navigate = useNavigate()
    // useState
    const [jobs,setJobs] = useState(null)
    const [dialog,setDialog] = useState(false)
    const [delId,setdelId] = useState(null)
    useEffect(()=>{
        const AllJobs = async () => {
            const response = await fetch('https://jobs-2dwq.onrender.com/usermenu/myjobs',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${user.token}`
                }
            })
        const AllJobs = await response.json()
        if(!response.ok){
            alert('Problem')
        }
        if(response.ok){
            setJobs(AllJobs)
        }
        }
        if(user){
            AllJobs()
        }
    },[user])

// Delete Job // Set Current Job's Id 
const deleteSingleItem = async (id) => {
    setDialog(true)
    setdelId(id)
}
// DELETE JOB
const deleteJob = async () => {
    const responce = await fetch('https://jobs-2dwq.onrender.com/jobs/myjobs/'+delId,{
        method:'DELETE'
    })
    const json = await responce.json()
    if(!responce.ok){
        alert('Something Went Wrong Please Try Again Later')
    }
    if(responce.ok){
        setDialog(false)
        setJobs([...jobs.filter(res=>res._id !== delId)])
        console.log(json.deletedItemIs)
    }
}


  return (
    <>
{jobs && 
<>
{jobs.map(res=>(
    <div className='alljobs' key={res._id}>
    <Box className='singleBox'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6' sx={{textTransform:'capitalize'}}>Position: {res.position}</Typography>
        <Stack direction='row'>
        <Button variant="contained" color="primary" sx={{margin:'10px 5px'}} onClick={()=>navigate(`/modify/${res._id}`)}>Edit</Button>
        <Button variant="contained" color="error" sx={{margin:'10px 5px'}} onClick={()=>deleteSingleItem(res._id)}>Delete</Button>
        </Stack>
        {/* Dialog */}
        <Dialog 
        open={dialog}
        onClose={()=>setDialog(false)}
        >
            <DialogTitle>Deleting <span style={{color:'red'}}>{res.position}</span> Job</DialogTitle>
            <DialogContent>
            <DialogContentText>Are you sure you want to delete this job ? </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setDialog(false)}>Cancel</Button>
                <Button autoFocus onClick={()=>deleteJob()}>Delete</Button>
            </DialogActions>
        </Dialog>
        </Stack>
        <div className='line' style={{width:'100%',margin:'10px 0px'}}></div>
    <Typography variant='h6' sx={{textTransform:'capitalize'}}>Company: {res.companyName}</Typography>
    <Typography variant='h6' sx={{textTransform:'capitalize'}}>location: {res.location}</Typography>
    <Typography variant='h6' sx={{textTransform:'capitalize'}}>experience: {res.experience}</Typography>
    <Typography variant='h6' sx={{textTransform:'capitalize'}}>description: {res.description}</Typography>
    <Typography variant='h6' sx={{textTransform:'capitalize'}}>salary: {res.salary} $</Typography>
    </Box>
        </div>
))}
</>}
{!jobs || jobs.length===0 && 
<div style={{width:'100vw',textAlign:'center',marginTop:'100px'}}>
    <Typography>You Don't Have Any Jobs Posted</Typography>
</div>}
</>
  )
}
