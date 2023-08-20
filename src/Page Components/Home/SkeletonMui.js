import React from 'react'
import { Skeleton,Stack,Typography } from '@mui/material'

export default function SkeletonMui() {
  return (
    <>
    <Stack direction='column' spacing={2}>
        <Typography sx={{fontSize:'18px'}}>
            <Skeleton width='20%' animation='wave'/>
        </Typography>
        <Typography sx={{fontSize:'24px'}}>
            <Skeleton width='40%' animation='wave'/>
        </Typography>
        <Skeleton width='50%' height='50px' />
        <Typography sx={{fontSize:'16px'}}>
            <Skeleton width='15%' animation='wave'/>
        </Typography>
        <Typography sx={{fontSize:'26px'}}>
            <Skeleton width='10%' animation='wave'/>
        </Typography>
    </Stack>
    <Stack direction='column' spacing={2} mt={10}>
    <Typography sx={{fontSize:'18px'}}>
            <Skeleton width='20%' animation='wave'/>
        </Typography>
        <Typography sx={{fontSize:'24px'}}>
            <Skeleton width='40%' animation='wave'/>
        </Typography>
        <Skeleton width='50%' height='50px' />
        <Typography sx={{fontSize:'16px'}}>
            <Skeleton width='15%' animation='wave'/>
        </Typography>
        <Typography sx={{fontSize:'26px'}}>
            <Skeleton width='10%' animation='wave'/>
        </Typography>
        </Stack>
        </>
  )
}
