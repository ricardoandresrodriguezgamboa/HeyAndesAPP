import React from 'react'
import { Box,Typography } from '@mui/material';
import { useLoadData } from '../../hooks';
import { useSelector } from 'react-redux';

export const mostFrequent = (arr, n) => {


    var hash = new Map();
    for (var i = 0; i < n; i++)
    {
        if(hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i])+1)
        else
            hash.set(arr[i], 1)
    }
 

    var max_count = 0, res = -1;
    hash.forEach((value,key) => {
         
        if (max_count < value) {
            res = key;
            max_count = value;
        }
 
    });
 
    return res;
}


export const MonthMoreSales = () => {

const companies = useLoadData();

const day = companies.map(company => company.day);
 var array_day_mounth = [];

 day.forEach(day_m => { 

   if(day_m!=undefined){

    const day_mounth = day_m.toString().substring(5,7);
    
    array_day_mounth.push(day_mounth);
 
   }  
   
 });


const mounth_more_sales = mostFrequent(array_day_mounth,array_day_mounth.length);

var mounth_more_sales_name = "";

switch (mounth_more_sales) {
    case "01":
        mounth_more_sales_name = "Enero"
        break;
    case "02":
        mounth_more_sales_name = "Febrero"
        break;
    case "03":
        mounth_more_sales_name = "Marzo"
        break;
    case "04":
        mounth_more_sales_name = "Abril"
        break;
    case "05":
        mounth_more_sales_name = "Mayo"
        break;
    case "06":
        mounth_more_sales_name = "Junio"
        break;
    case "07":
        mounth_more_sales_name = "Julio"
        break;
    case "08":
        mounth_more_sales_name = "Agosto"
        break;
    case "09":
        mounth_more_sales_name = "Septiembre"
        break;
    case "10":
        mounth_more_sales_name = "Octubre"
        break;
    case "11":
        mounth_more_sales_name = "Noviembre"
        break;
    case "12":
        mounth_more_sales_name = "Diciembre"
        break;
    default:
        mounth_more_sales_name = "-"
        break;
}

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
             MES MÁS VENTAS 
            </Typography>

            { 
            
            isLoading ?  
            
            <Typography  variant='h4' noWrap component='div' sx={{paddingTop:2,textAlign:'center'}}>
                Cargando...
            </Typography>
            
            :  

            <Typography  variant='h2' noWrap component='div' sx={{paddingTop:2,textAlign:'center',fontWeight:'600'}}>
                {mounth_more_sales_name}
            </Typography>
    
            }
      
    </Box>

  )
}
