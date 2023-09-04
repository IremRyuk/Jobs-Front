import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box, Stack, Typography, Button} from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaidIcon from '@mui/icons-material/Paid';
import EmailIcon from '@mui/icons-material/Email';
import CircularProgress from '@mui/material/CircularProgress';

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


    // StylIng Mui 
const TypographyText = {
    fontSize:{xs:'20px',md:'22px',lg:'25px'},
    paddingLeft:{xs:'10px',sm:'40px'},
    color:'#141414'}


    return (
    <>
    {!item && 
<div style={{width:'100vw',height:'80vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <CircularProgress />
</div>}
    {item && item.map(res => (
            <Box
                key={res._id}
                sx={{
                    marginTop:{xs:'20px',sm:'30px',md:'50px'},
                    marginBottom:{xs:'10px',sm:'25px',md:'50px'},
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alginItems: 'center',
                    bgcolor: '#FAFAFA'
                }}>
                <Stack
                    display='flex'
                    justifyContent='center'
                    alignItems='flex-start'
                    sx={{
                        flexDirection:{xs:'column',md:'row'},
                        width: {
                            xs:'100%',
                            sm: '90%'
                        },
                        padding: '10px',
                        gap: '10px',
                        bgcolor: 'white'
                    }}>

                    {/* Job Description */}
                    <Box
                    display='flex' 
                    flexDirection='column' 
                    gap={4} 
                    sx={{
                        width:{xs:'100',md:'70%'}
                    }}
                    >
                        {/* Position */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                            <BusinessCenterIcon  fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h4' sx={{fontSize:{xs:'30px',md:'35px'},color:'rgba(20, 20, 20, 0.7)'}}>Position</Typography>
                        </Stack >
                            <Typography variant='h4' sx={{fontSize:{xs:'30px',md:'35px'},paddingLeft:{xs:'10px',sm:'40px'},color:'#141414'}}>{res.position}</Typography>
                        </Stack>

                        {/* Company Name */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <ApartmentIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Company </Typography>
                        </Stack>
                            <Typography sx={TypographyText}>{res.companyName}</Typography>
                        </Stack>

                        {/* Company Desciption */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <DescriptionIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)',width:'fit-content'}}>Description </Typography>
                            </Stack>
                            <Typography sx={TypographyText}>{res.description}</Typography>
                        </Stack>

                        {/* Location */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <PlaceIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Location </Typography>
                        </Stack>
                            <Typography sx={TypographyText}>{res.location}</Typography>
                        </Stack>
                        
                        {/* Experience */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <DateRangeIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Experience </Typography>
                        </Stack>
                            <Typography sx={TypographyText}>{res.experience} Years</Typography>
                        </Stack>
                        
                        {/* Salary */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <PaidIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Salary </Typography>
                        </Stack>
                            <Typography sx={TypographyText}>{res.salary} $</Typography>
                        </Stack>
                        {/* Gmail */}
                        <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='flex-start'>
                        <Stack direction='row' alignItems='flex-end' spacing={1} justifyContent='center'>
                        <EmailIcon fontSize='large' sx={{color:'rgba(20, 20, 20, 0.7)'}} />
                            <Typography variant='h5' sx={{color:'rgba(20, 20, 20, 0.7)'}}>Gmail </Typography>
                        </Stack>                            
                            <Typography sx={TypographyText}>{res.gmail}</Typography>
                        </Stack>
                    </Box>


                    {/* Job Contacts and Support Help */}
                    <Stack 
                    display='flex'
                    alignItems='center'
                    sx={{
                        justifyContent:{xs:'space-evenly',md:'space-between'},
                        flexDirection:{xs:'row',md:'column'},
                        width:{xs:'100%',md:"30%"},
                        gap:'20px 0px',
                        padding:'5px'
                    }}
                     >
                        <Button
                        disableElevation
                        disableTouchRipple
                         variant='contained'
                         sx={{width:{xs:'60%',md:'100%',lg:'70%'},bgcolor:'#3575E2',padding:{md:'20px 10px',lg:'20px 10px'}}}
                         onClick={()=>window.location.href='mailto:'+res.gmail}
                         >Send Message In Gmail</Button>

                        <Button
                        disableElevation
                        disableTouchRipple
                         variant='contained'
                         color='error'
                         sx={{width:{xs:'37%',md:'100%',lg:'70%'},padding:{md:'20px 10px',lg:'20px 10px'}}}
                         onClick={()=> window.location.href = 'tel://' + 743121441}
                         >Support Help</Button>
                    </Stack>
                </Stack>
            </Box>
        ))
    } 
    </>
  )
}