import { 
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
import IsPending from "../../components/ispendingbtn";
import ErrorAlert from "../../components/erroralert";
import InputField from "../../components/inputfield";
import PasswordAndShowBtn from "../../components/passwordAndBtnField";

const Login = () => {
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
   if(localStorage.getItem('crmuser')){
    navigate('/dashboard',{replace:true})
   }
    
})
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validator.isEmpty(user && password)){
            setError('fill it up')
        }else{
            setIspending(true);
            axios.post("http://localhost:3001/login",{
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
                    localStorage.setItem('crmuser',JSON.stringify(response.data))
                   setTimeout(()=> navigate('/dashboard',{replace:true}),4000)
                }
                
            });
            
        }
       
    }
    return ( 
        <Flex
       flexDirection="column"
      alignItems="center"
       w={["90%","40%"]}
       m={"0 auto"}
       runded="md"
       boxShadow="md"
       border='1px solid #eee'
       mt="50px"
       mb="50px"
       p="10px"
       as="form"
       gap={'10px'}
       onSubmit={handleSubmit}
       >
           <Heading size='md'>Login</Heading>
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
           
          <IsPending name={isPending} />
           <FormControl>
          <Text>Don't have an account ? <Link color='blue.400' href="/register">Sign Up</Link> </Text>
          </FormControl>
       </Flex>
     );
}
 
export default Login;