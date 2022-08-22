import React from 'react'
import { CompanyLayout } from '../layout/CompanyLayout'
import { Grid,IconButton } from '@mui/material';
import { CompanyMoreSales,MonthMoreSales,CompanyTable } from '../components';
//importación metodos para insertar json por primera vez a bd firebase
// import { InsertAllCompanies } from '../../store/Company/thunks';
// import { useDispatch } from 'react-redux';
// import { AddOutlined } from '@mui/icons-material';


export const CompanyPage = () => {

    //Metodo para insertar por primera vez JSON.

    // const dispatch = useDispatch();
 
    // const onClickNewCompany = ()=>{
    //     dispatch(InsertAllCompanies() );
    // }

    

  return (
 
    <CompanyLayout>


        <Grid container spacing={5} sx={{mt:5}}>
            <Grid item xs={6} >
                 <CompanyMoreSales></CompanyMoreSales>
            </Grid>

            <Grid item xs={6} >
                <MonthMoreSales></MonthMoreSales>
            </Grid>
        </Grid>

        <Grid container spacing={5} sx={{mt:5}}>
            <Grid item xs={12} >
                 <CompanyTable></CompanyTable>
            </Grid>
        </Grid>

        {/* Botón utilizado la primera vez para cargar JSON en BD de firebase  */}

        {/* <IconButton
        onClick={ onClickNewCompany }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton> */}

      

 
    </CompanyLayout>


  )
}
