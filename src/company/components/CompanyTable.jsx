import * as React from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLoadData } from '../../hooks';
import { CompanyNamePage } from '../pages';
import {  Navigate ,Link } from 'react-router-dom';




const linkStyle = {
    textDecoration: "none",
    color: '#fff'
};

const columns = [
    // { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'nameAgency', headerName: 'Nombre Empresa', flex: 1},
    { field: 'finalPrice', headerName: 'Total de ventas', flex: 1, type:'number',headerAlign: 'left',align: 'left' },
    {
      field: 'commission',
      headerName: 'Comisión',
      flex: 1
    },
    {
        field: 'Details',
        headerName: 'Detalle',
        flex: 1,
        sortable: false,
        renderCell: (params) => {
           
            const com_id = params.row.id;

            return <Button sx={{fontSize:16}} variant="contained" >
                 <Link 
                style={linkStyle}
                to={`/company_name/${com_id}`}
                 >
                ver detalle 
            </Link>
            </Button>;
        }
    } 

  ];
  



export const CompanyTable = () => {

  
  
    const companies = useLoadData();
    
    const {isLoading} = useSelector(state=> state.company);

    
 

  return (
    <>

    <div style={{ borderRadius:15, height: 485, width: '100%', background:'#fff' ,boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
     <DataGrid
      localeText={esES.components.MuiDataGrid.defaultProps.localeText} 
      sx={{paddingTop:1,paddingLeft:2,fontSize:19,borderRadius:4}}
      rows={companies}
      columns={columns}
      pageSize={7}
      rowsPerPageOptions={[5]}
      loading={isLoading}
    />
  </div>


</>

  )
}
