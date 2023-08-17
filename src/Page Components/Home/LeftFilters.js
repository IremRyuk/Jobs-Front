import {Box,Stack,FormControl,FormControlLabel,Radio,Typography,Button,RadioGroup,TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'
import PaidIcon from '@mui/icons-material/Paid';
import {useDispatch,useSelector} from 'react-redux'
import { DataJobsActFilteredData } from '../../Redux/action/DataJobsAct';
export default function LeftFilters(){

    // Redux Dispatch
    const dispatch = useDispatch()

    // Default Values useState
    const [location,setLocation] = useState('all')
    const [salary,setSalary] = useState('')
    const [experience,setExperience] = useState('0')

    // Default Data From Redux
    const data = useSelector(res=>res.defaultData)


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

    return(
        <Box
        sx={{
            display: 'flex',
            width: '320px',
            height:'min-content',
            padding: '24px',
            alignItems: 'flex-start',
            gap: '24px',
            borderRadius: '8px',
            border: '1px solid rgba(20, 20, 20, 0.05)',
            background: '#FFF',
            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.03)',
        }}
        >
        <Stack
        direction='column'
        sx={{
            width:'202px',
            alignItems: 'flex-start',
            gap: '16px',
            flex: '1 0 0',
        }}
        >
        <FormControl>
        <Typography 
        sx={{
            color: '#141414',
            fontFamily: 'DM Sans',
            fontSize: '20px',
            fontWeight: '700',
         }}
        >Filters</Typography>

        {/* Location */}
        <Stack mt={2}>
        <Typography 
        sx={{
            color: '#141414',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '500',
         }}
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
        sx={{
            color: '#141414',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '500',
         }}
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
        sx={{
            color: '#141414',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '500',
         }}
        >Working Experience</Typography>

        <RadioGroup value={experience}  defaultValue={experience} onChange={(e)=>setExperience(e.target.value)}>
            <FormControlLabel value='0' control={<Radio />} label='0' />
            <FormControlLabel value='2' control={<Radio />} label='< 2' />
            <FormControlLabel value='5' control={<Radio />} label='< 5' />
            <FormControlLabel value='10' control={<Radio />} label='< 10' />
        </RadioGroup>
</Stack>
            </FormControl>
            <br />
            <Button variant='contained' fullWidth onClick={filterData}>Filter</Button>
        </Stack>
        </Box>
    )
}