import {configureStore} from '@reduxjs/toolkit';
import { CompanySlice } from './Company';


export const store = configureStore ({
  
    reducer:{
        company: CompanySlice.reducer
    },

});
