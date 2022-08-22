import * as React from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLoadData } from '../../hooks';
import { CompanyNamePage } from '../pages';
import {  Navigate ,Link,useParams } from 'react-router-dom';


 
const linkStyle = {
   fontSize:'22px',
   textDecoration:'none',
   color:'blue'
};

const columns = [
    // { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Nombre cliente', flex: 1, sortable:false},
    { field: 'persons', headerName: 'Personas', flex: 1,sortable:false },
    { field: 'day', headerName: 'Día', flex: 1,sortable:false,type:'date'},
    { field: 'hour', headerName: 'Hora', flex: 1,sortable:false },
    { field: 'finalPrice', headerName: 'Valor venta', flex: 1,type:'number',headerAlign: 'left',align: 'left',sortable:false }
  ];
  
 

export const CompanyDetailsTable = () => {

    let { com_id } = useParams();
 
    const companies = useLoadData();
    
    const {isLoading} = useSelector(state=> state.company);

    const comp = companies.filter(com=>com.id==com_id);

 

  return (
   <>
      <Link 
        style={linkStyle}
        to={'/company'}
            >
       Empresa
    </Link> / <div style={{display:'inline',fontSize:'22px'}}>{comp[0].nameAgency}</div>
    
    <div style={{ marginTop:30, borderRadius:15, height: 485, width: '100%', background:'#fff' ,boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
     <DataGrid
      localeText={esES.components.MuiDataGrid.defaultProps.localeText} 
      sx={{paddingTop:1,paddingLeft:2,fontSize:19,borderRadius:4}}
      rows={comp}
      columns={columns}
      pageSize={7}
      rowsPerPageOptions={[5]}
      loading={isLoading}
    />
  </div>
</>

  )
}
