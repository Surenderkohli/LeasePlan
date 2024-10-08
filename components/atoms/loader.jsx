import React,{useState} from 'react'

import CircularProgress, {
    circularProgressClasses,
  } from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const Loader = (props) => {
    const [loader, setLoader] = useState(false)
  return (<><Box sx={{ position: 'relative' }}>
  <CircularProgress
    variant="determinate"
    sx={{
      color: (theme) =>
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    }}
    size={40}
    thickness={4}
    {...props}
    value={100}
  />
  <CircularProgress
    variant="indeterminate"
    disableShrink
    sx={{
      color: (theme) => (theme.palette.mode === 'light' ? '#f06400' : '#f06400'),
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
      [`& .${circularProgressClasses.circle}`]: {
        strokeLinecap: 'round',
      },
    }}
    size={40}
    thickness={4}
    {...props}
  />
</Box>
  
  
  </>
   
  )
}

export default Loader