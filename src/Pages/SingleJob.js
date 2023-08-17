import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box, Stack, Typography, Button} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';

export default function SingleJob() {
    const [item, setItems] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const GetAll = async () => {
            let server = await fetch('https://jobs-2dwq.onrender.com/jobs/')
            let responce = await server.json()
            let single = responce.filter(res => res._id === id)
            setItems(single)
        }
            GetAll()
        
    }, [id])
    return (
    <> 
    {item && item.map(res => (
            <Box
                key={res._id}
                sx={{
                    marginTop: '100px',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alginItems: 'center',
                    bgcolor: '#FAFAFA'
                }}>
                <Stack
                    direction='column'
                    justifyContent='center'
                    sx={{
                        width: {
                            sm: '90%'
                        },
                        padding: '10px',
                        gap: '10px',
                        bgcolor: 'white'
                    }}>
                    <Box display='flex' width='100%' flexDirection='column' gap={4}>
                        {/* Position */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <BusinessCenterIcon  fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h4' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Position </Typography>
                            <Typography variant='h4' sx={{paddingLeft:'20px',color:'#141414'}}>{res.position}</Typography>
                        </Stack>

                        {/* Company Name */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <ApartmentIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Company </Typography>
                            <Typography variant='h5' sx={{paddingLeft:'20px',color:'#141414'}}>{res.companyName}</Typography>
                        </Stack>

                        {/* Company Desciption */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <DescriptionIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)',width:'fit-content'}}>Description </Typography>
                            <Typography variant='h5' sx={{paddingLeft:'20px',color:'#141414',width:'fit-content'}}>{res.description}</Typography>
                        </Stack>

                        {/* Location */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <PlaceIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Location </Typography>
                            <Typography variant='h5' sx={{paddingLeft:'20px',color:'#141414'}}>{res.location}</Typography>
                        </Stack>
                        
                        {/* Experience */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <DateRangeIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Experience </Typography>
                            <Typography variant='h5' sx={{paddingLeft:'20px',color:'#141414'}}>{res.experience} Years</Typography>
                        </Stack>
                        
                        {/* Salary */}
                        <Stack direction='row' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <PaidIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Salary </Typography>
                            <Typography variant='h5' sx={{paddingLeft:'20px',color:'#141414'}}>{res.salary} $</Typography>
                        </Stack>
                    </Box>
                    <Stack direction='row' mt={7} width='100%' spacing={2}>
                        <Button
                        disableElevation
                        disableTouchRipple
                         variant='contained'
                         sx={{width:'30%',bgcolor:'#3575E2',padding:'10px 40px'}}
                         onClick={()=>window.location.href='mailto:'+res.gmail}
                         >Message Company In Gmail</Button>

                        <Button
                        disableElevation
                        disableTouchRipple
                         variant='contained'
                         sx={{width:'30%',bgcolor:'#3575E2',padding:'10px 40px'}}
                         onClick={()=>window.location.href='mailto:'+res.gmail}
                         >Call To Company</Button>

                        <Button
                        disableElevation
                        disableTouchRipple
                         variant='contained'
                         color='error'
                         sx={{width:'30%',padding:'10px 40px'}}
                         onClick={()=>window.location.href='mailto:'+res.gmail}
                         >Support Help</Button>
                    </Stack>
                </Stack>
            </Box>
        ))
    } 
    </>
  )
}