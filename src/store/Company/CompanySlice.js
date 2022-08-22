import { createSlice } from "@reduxjs/toolkit";

  

export const CompanySlice = createSlice({
    name: 'Company',
    initialState: {
        isLoading: true,
        companies: []
    },
    reducers: {  
        setCompanies: (state, action ) => {
            state.companies = action.payload
            state.isLoading = false
        }
        
    }
});

 
export const { 
    setCompanies
} = CompanySlice.actions;