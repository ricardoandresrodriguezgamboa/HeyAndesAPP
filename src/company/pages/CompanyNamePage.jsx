import React from 'react'
import { CompanyLayout } from '../layout/CompanyLayout'
import { Grid,IconButton } from '@mui/material';
import { CompanyDetailsTable } from '../components';


export const CompanyNamePage = () => {


return (
 
    <CompanyLayout>



        <Grid container spacing={5} sx={{mt:5}}>
            <Grid item xs={12} >
                <CompanyDetailsTable></CompanyDetailsTable>
            </Grid>
        </Grid>

      
      

 
    </CompanyLayout>

) 
}
