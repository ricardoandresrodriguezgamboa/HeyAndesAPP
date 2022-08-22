import React from 'react'
import { Box,Typography,Button } from '@mui/material';
import { useLoadData } from '../../hooks';
import { useSelector } from 'react-redux';



export const CompanyMoreSales = () => {

 const companies = useLoadData();


 
 const max = Math.max(...companies.map(company => company.finalPrice));
 var nf = Intl.NumberFormat();
 const company_more_sales = nf.format(max);

 const {isLoading} = useSelector(state=> state.company);

  return (

 
    <Box
        sx={{
        width:  '100%',
        height: 200,
        borderRadius: 5,
        backgroundColor: '#fff',
        boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '&:hover': {
            opacity: [0.9, 0.8, 0.8],
        },
        }}
        >
            <Typography variant='h4' noWrap component='div' sx={{paddingTop:5,textAlign:'center'}}>
             EMPRESA MÁS VENTAS 
            </Typography>

            { 
            
            isLoading ?  
            
            <Typography  variant='h4' noWrap component='div' sx={{paddingTop:2,textAlign:'center'}}>
                Cargando...
            </Typography>
            
            :  

            <Typography  variant='h2' noWrap component='div' sx={{paddingTop:2,textAlign:'center',fontWeight:'600'}}>
                ${company_more_sales}
            </Typography>
 
         
            }
            
      
    </Box>



 
  )
}
