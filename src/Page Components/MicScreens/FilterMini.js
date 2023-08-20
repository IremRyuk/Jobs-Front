import { Drawer, Box,Stack,FormControl,FormControlLabel,Radio,Typography,Button,RadioGroup,TextField,InputAdornment } from '@mui/material'
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import PaidIcon from '@mui/icons-material/Paid';
import { DataJobsActFilteredData } from '../../Redux/action/DataJobsAct';

export default function FilterMini() {
    const [fil,setFil] = useState(false)    
    // Redux Dispatch
    const dispatch = useDispatch()

    // Default Values useState
    const [location,setLocation] = useState('all')
    const [salary,setSalary] = useState('')
    const [experience,setExperience] = useState('0')

    // Default Data From Redux
    const data = useSelector(res=>res.defaultData)
    // Style For Typography
    const TypographyStyle = {
        color: '#141414',
        fontFamily: 'DM Sans',
        fontSize: '18px',
        fontWeight: '500',
        textAlign:'left'
    }


    // Filter for main data
    const filterData = () => {
if(location === 'all'){
    setSalary('')
    setExperience('0')
    dispatch(DataJobsActFilteredData(data))
    return    
}

let newData = data.filter(res=>{
    return res.location.toLowerCase() === location.toLowerCase() && res.experience >= experience && res.salary >= salary
})

dispatch(DataJobsActFilteredData(newData))
    }
  return (
    <>
    <Button variant='contained' sx={{width:'30vw',margin:"0px 10px"}} onClick={()=>setFil(true)}>Filter</Button>
    <Drawer open={fil} onClose={()=>setFil(false)} anchor='left'>
        <Box sx={{width:{xs:'250px'},margin:'10px 0px',padding:'10px 20px',textAlign:'center'}}>
        <Stack
        direction='column'
        sx={{
            width:'100%',
            alignItems: 'center',
            gap: '16px',
            flex: '1 0 0',
        }}
        >
        <FormControl>
        <Typography 
        sx={TypographyStyle}
        >Filters</Typography>

        {/* Location */}
        <Stack mt={2}>
        <Typography 
        sx={TypographyStyle}
        >Location</Typography>
<FormControl>
        <RadioGroup value={location}  defaultValue={location} onChange={(e)=>setLocation(e.target.value)}>
        <FormControlLabel value='all' control={<Radio />} label='All' />
            <FormControlLabel value='remote' control={<Radio />} label='Remote' />
            <FormControlLabel value='office' control={<Radio />} label='Office' />
        </RadioGroup>
        </FormControl>
        </Stack>

        {/* Salary */}
        <Stack mt={2} sx={{width:'70%'}}>
        <Typography 
        sx={TypographyStyle}
        >Salary</Typography>
        <TextField
        type='number'
        value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        placeholder='Salary'
        InputProps={{
            startAdornment:(
                <InputAdornment position='start'>
                <PaidIcon />
                </InputAdornment>
            )
        }}
        />
        </Stack>
        
        {/* Working Experience */}
        <Stack mt={2}>
        <Typography 
        sx={TypographyStyle}
        >Working Experience</Typography>

        <RadioGroup value={experience}  defaultValue={experience} onChange={(e)=>setExperience(e.target.value)}>
            <FormControlLabel value='0' control={<Radio />} label='0' />
            <FormControlLabel value='2' control={<Radio />} label='> 2' />
            <FormControlLabel value='5' control={<Radio />} label='> 5' />
            <FormControlLabel value='10' control={<Radio />} label='> 10' />
        </RadioGroup>
</Stack>
            </FormControl>
            <br />
            <Button variant='contained' fullWidth onClick={filterData}>Filter</Button>
        </Stack>
        </Box>
    </Drawer>
    </>
  )
}
