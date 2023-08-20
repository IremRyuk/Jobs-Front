import { Box,Stack, Typography,FormControl,MenuItem,Select,InputAdornment} from '@mui/material'
import {useState} from 'react'
import FilterIcon from '../../Images/filterIcon.svg'
import {useDispatch, useSelector} from 'react-redux'
import { DataJobsTimeReverse } from '../../Redux/action/DataJobsAct'

export default function MainJobs() {
    const dispatch = useDispatch()
    // Redux Default Data
    const data = useSelector(res=>res.allData)

    const [upToDown,setUpToDown] = useState('latest')

    const filterByDate = (e) => {
      setUpToDown(e.target.value)
      let newArray = [...data];
      newArray.reverse();
      dispatch(DataJobsTimeReverse(newArray))
    }

  return (
    <Box
    sx={{
        display: 'flex',
        justifyContent:'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px'
    }}
    >
        {/* Box Navigation */}
        <Stack 
        direction='row'
        sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        }}
        >

       {data && 
       <>
        {/* Count Jobs Length */}
       <Typography 
       sx={{
        color: '#141414',
        fontFamily: 'DM Sans',
        fontSize: {xs:'25px',md:'32px'},
        fontStyle: 'normal',
        fontWeight: '700',
       }}>{data.length} Jobs</Typography>

       {/* Filter By */}
       <FormControl sx={{ m: 1, minWidth: 120 }} disabled={data.length<=3?true:false}>
        <Select
        sx={{
          width:{xs:'150px',sm:'257px'},
        }}
          value={upToDown}
          onChange={(e)=>filterByDate(e)}
          startAdornment={
            <InputAdornment position="end">
              <img src={FilterIcon} alt='JobList Filter' style={{paddingRight:'12px'}}/>
            </InputAdornment>
          }
        >
          <MenuItem value='latest'>Latest</MenuItem>
          <MenuItem value='oldest'>Oldest</MenuItem>
        </Select>
      </FormControl>
       </>
       }


       
        </Stack>
    </Box>
  )
}
