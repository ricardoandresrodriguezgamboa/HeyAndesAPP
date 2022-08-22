import React from 'react'
import { NavBar} from '../components/NavBar'
import { Box } from '@mui/system'


export const CompanyLayout = ({ children }) => {
  return (
 

    <Box sx={{ display: '' }} className='animate__animated animate__fadeIn animate__faster'>

        <NavBar/>   
       
        <Box 
            component='main'
            sx={{  p: 2 }}
        >
      
            
            {children}

        </Box>
      
    </Box>



  
 
  )
}
