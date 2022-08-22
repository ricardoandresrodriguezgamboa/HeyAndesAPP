import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingCompany } from '../store/Company/thunks';
 

export const useLoadData = () => {
  
    
    const  {companies}  = useSelector(state=> state.company);

    const dispatch = useDispatch();



    useEffect(() => {
        
  
        dispatch( LoadingCompany() );
     
    
    }, []);

    
    return companies;
}


