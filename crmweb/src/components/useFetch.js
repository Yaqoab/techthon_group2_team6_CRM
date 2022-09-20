import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData]=useState(null);
    const [error, setError]=useState('');
   useEffect(()=>{
    axios.get(url)
    .then(res=>{
      setData(res.data)
    }).catch(error=>setError(error.message))
   },[data, error])
   return {data, error};
}
 
export default useFetch;