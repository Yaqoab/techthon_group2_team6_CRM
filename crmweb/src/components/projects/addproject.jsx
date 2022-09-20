import ProjectForm from "./projectform";
import validator from 'validator'
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import IsPending from "../ispendingbtn";
import axios from "axios";
import ErrorAlert from "../erroralert";

    const AddProject = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('crmuser')){
         navigate('/login',{replace:true})
        }    
     },[navigate]);
   const obj={
       client:'',
       title:'',
       payment:'',
       startAt:new Date().toLocaleDateString(),
       submitDay:'',
       description:''
   }
   const [proData, setProData]=useState(obj)
   const [isPending, setIspending]=useState(false);
   const [error, setError]=useState('')
   const handleChange=(event)=>{
    const {name, value}=event.target;
    setProData({...proData, [name]:value})
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(validator.isEmpty(proData.client && proData.title && proData.payment && proData.description)){
            setError('is empty')
        }else{
             setIspending(true)
             axios.post("/api/projects",proData).then(res=>{
          if (res.data.message) {
             setError(res.data.message)
             setIspending(false)
          }else{
              setTimeout(() => {
               setIspending(false)
                navigate('/projects')
            }, 5000);
          }
          })
           
        }
        
     }
        
    return ( 
        <Stack
        direction='column'
        as='form'
        width='300px'
        margin='0 auto'
        mt='50px'
        padding="10px"
        runded="md"
        boxShadow="md"
        border='1px solid #eee'
        onSubmit={handleSubmit}
        >
        <ProjectForm 
        client={proData.client}
        title={proData.title}
        payment={proData.payment}
        submitDay={proData.submitDay}
        description={proData.description}
        change={handleChange}
        onSubmit={handleSubmit}
        />
        <ErrorAlert name={error} msg={error} />
        <IsPending name={isPending} />
        </Stack>
     );
}
 
export default AddProject;