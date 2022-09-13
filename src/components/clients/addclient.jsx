import {Stack, Heading} from "@chakra-ui/react";
import {useState, useEffect} from "react";
import NavigateToLogin from "../navigateToLogin";
import InputField from "../inputfield";
import ErrorAlert from "../erroralert";
import IsPending from "../ispendingbtn";
import validator from 'validator';
import axios from "axios";
import {useNavigate } from "react-router-dom";

const AddClient=()=>{
const navigateTo=useNavigate();
 const {navigate}=NavigateToLogin();
    const obj={
       name:'',
       email:'',
       country:'',
       state:''
   }
   const [clientData, setClientData]=useState(obj)
   const [isPending, setIspending]=useState(false);
   const [error, setError]=useState('')	
 const handlechange=(event)=>{
   const {name, value}=event.target;
    setClientData({...clientData, [name]:value})
 }
 console.log(clientData)
 const handleSubmit=(event)=>{
    event.preventDefault();
  if(validator.isEmpty(clientData.name && clientData.email && clientData.country && clientData.state)){
    setError('is empty')
    }else if(!validator.isEmail(clientData.email)){
     setError('Please enter valid email address')
    }else{
         setIspending(true)
         axios.post("http://localhost:8080/clients",clientData);
         setTimeout(() => {
         setIspending(false)
         navigateTo('/clients')
            }, 5000);
        }
        }

	return(
        <Stack 
        direction='column'
        as='form'
        width='300px'
        margin='0 auto'
        mt='50px'
        padding="10px"
        runded="md"
        border='1px solid #eee'
        boxShadow="md"
        onSubmit={handleSubmit}
        >
        	 <Heading size='md' textAlign="center">Add project</Heading>
          <InputField 
           label='Nmae'
           type='text'
           name='name'
           value={clientData.name}
           onchange={handlechange}
          />
          <InputField 
           label='Email'
           type='text'
           name='email'
           value={clientData.email}
           onchange={handlechange}
          />
          <InputField 
           label='Country'
           type='text'
           name='country'
           value={clientData.country}
           onchange={handlechange}
          />
          <InputField 
           label='State'
           type='text'
           name='state'
           value={clientData.state}
           onchange={handlechange}
          />
          <ErrorAlert name={error} msg={error} />
        <IsPending name={isPending} />
        </Stack>
		)
}

export default AddClient;