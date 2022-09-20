import { 
    Box,
    Flex,
    FormControl, 
    Heading, 
    Alert,
    AlertIcon,
    Text,
    Link
 } from "@chakra-ui/react";
import axios from "axios";
import validator from 'validator';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IsPending from "./ispendingbtn";
import ErrorAlert from "./erroralert";
import InputField from "./inputfield";
import PasswordAndShowBtn from "./passwordAndBtnField";
import useFetch from './useFetch';

const LoginComponent = (props) => {
    const [show, setShow]=useState(false)
    const handleClick=()=> setShow(!show)
    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const [isPending, setIspending]=useState(false)
    const [errorcheck,setError]=useState('');
    const [loginStatus, setLoginStatus]=useState('');
    const [data, setData]=useState(null);
    const navigate=useNavigate();

   useEffect(()=>{
   if(localStorage.getItem(props.if)){
    navigate('/dashboard',{replace:true})
   }
    
});
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validator.isEmpty(user && password)){
            setError('fill it up')
        }else{
            setIspending(true);
            axios.post(props.getfrom,{
                username:user,
                password:password
            }).then((response)=>{
                setIspending(false)
                setData(response.data)
               
                if(response.data.message){
                    setError(response.data.message)
                }else{
                    setError('')
                    setLoginStatus('logged successfull');   
                    localStorage.setItem(props.store,JSON.stringify(response.data))
                   setTimeout(()=> navigate(props.navigateTo,{replace:true}),4000)
                }
                
            });
            
        }
       
    }

    return ( 
      <Flex
      justifyContent='center'
      flexDirection="column"
      alignItems="center"
      height='100%'
      style={{
          backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundImage:'url(images/crm1.jpeg)',
            backgroundPosition:'center'
        }}
      >
        <Box
       bg='white'
       textAlign='center'
       w={["90%","35%"]}
       m={"0 auto"}
       runded="md"
       boxShadow="md"
       border='1px solid #eee'
       borderRadius='10px'
       mb="50px"
       p="10px"
       as="form"
       gap={'10px'}
       onSubmit={handleSubmit}
       >
           <Heading size='md'>{props.title}</Heading>
           <InputField 
           label='Email'
           type='text'
           name='username'
           value={user}
           onchange={(user)=>setUser(user.target.value)}
          />
          <PasswordAndShowBtn 
           type={show ? 'text' : 'password'}
           onchange={(pass)=>setPassword(pass.target.value)}
           onclick={handleClick}
           buttonValue={show ? 'hide' : 'show'}
          />
           <ErrorAlert name={errorcheck} msg={errorcheck} />
           {loginStatus &&<Alert status="success">
            <AlertIcon />
           {loginStatus} 
           </Alert>}
           
          <Box margin='10px'><IsPending name={isPending} /></Box>
           <Box margin='10px'>
          <Text>Don't have an account ? <Link color='blue.400' href="/register">Sign Up</Link> </Text>
          </Box>
       </Box>
       </Flex>
     );
}
 
export default LoginComponent;