import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
const NavigateToLogin=()=>{
   const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('crmuser')){
         navigate('/login',{replace:true})
        }    
     },[navigate]);
    return {navigate};
}

export default NavigateToLogin;