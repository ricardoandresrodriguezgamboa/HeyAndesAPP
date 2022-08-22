import React from 'react'
import { AppBar, Grid,Button,IconButton, Toolbar, Typography } from '@mui/material';


export const NavBar = () => {
  return (
        <AppBar 
        position='fixed'
        >
        <Toolbar>


            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> Ricardo Andres Rodríguez Gamboa </Typography>
            </Grid>

        </Toolbar>
     
    </AppBar>


  )
}
