import validator from 'validator'
import {
    Checkbox,
    Flex, 
    FormControl, 
    Heading, 
    Link,
    Stack,
    Text
 } from "@chakra-ui/react";
import { useState } from "react";
import IsPending from '../../components/ispendingbtn';
import ErrorAlert from '../../components/erroralert';
import InputField from "../../components/inputfield";
import PasswordAndShowBtn from "../../components/passwordAndBtnField";
const Register = () => {
     const userobj={
        name:'',
        lastname:'',
        email:'',
        password:'',
        comfirm:'',
        checkbox:false
    };
     const [regData, setRegData]=useState(userobj);
     const [checkError, setCheckerror]=useState('')
     const [show, setShow]=useState(false);
     const [isPending, setIspending]=useState(false);
     const handleClick=()=>setShow(!show);
    
     console.log(regData);
    const handleChange=(event)=>{
         const {name, value, type, checked}=event.target;
         //const value=event.target.value;
         setRegData({...regData, [name]: type==='checkbox'?checked:value});
          //{...userData, [name]: type==='checkbox'?checked:value} 
    }
    const handleSubmit=(e)=>{
     e.preventDefault();
     if(validator.isEmpty(regData.name && regData.lastname && regData.email && regData.password
         && regData.comfirm)){
        setCheckerror("fill it up");
     }else if(!validator.isEmail(regData.email)){
        setCheckerror("please enter valid email");
     }else if (validator.isLength(regData.password, {min:0, max:5})) {
        setCheckerror("password length should not be lesthan 6 character")
     }else if(regData.password !== regData.comfirm){
        setCheckerror("password does not match confirmation");
     }else if(regData.checkbox ===false){
        setCheckerror("you must agree wiith our terms and conditions");
     }else{
        setCheckerror('');
        setIspending(true);
        setRegData(userobj);
        setTimeout(()=>{
        setIspending(false);


    },4000)    
      }
    }
    return ( 
        <Flex
        flexDirection="column"
       alignItems="center"
        w={["90%","50%"]}
        m={"0 auto"}
        border='1px solid #eee'
        runded="md"
        boxShadow="md"
        mt="50px"
        p="10px"
        mb='100px'
        as="form"
        gap={'10px'}
        onSubmit={handleSubmit}
        >
            <Heading fontSize={['18px','20px']}>Sign Up</Heading>
            <Stack direction={['column','row']} width='100%'>
            <InputField 
           label='First name'
           type='text'
           name='name'
           value={regData.name}
           onchange={handleChange}
          />
           <InputField 
           label='Last name'
           type='text'
           name='lastname'
           value={regData.lastname}
           onchange={handleChange}
          />
         </Stack>
         <InputField 
           label='Emaiil'
           type='text'
           name='email'
           value={regData.email}
           onchange={handleChange}
          />
          <PasswordAndShowBtn 
           type={show ? 'text' : 'password'}
           onchange={handleChange}
           onclick={handleClick}
           buttonValue={show ? 'hide' : 'show'}
          />
          <InputField 
           label='Confirm'
           type={show ? 'text' : 'password'}
           name='comfirm'
           value={regData.comfirm}
           onchange={handleChange}
          />
         <FormControl>
             <Checkbox name={'checkbox'} 
             iconColor='twitter' 
             value={regData.checkbox}
             onChange={handleChange}><Text fontSize={'15px'}>I agree with the terms and conditons</Text></Checkbox>     
         </FormControl>
         <ErrorAlert name={checkError} msg={checkError} />
         <IsPending name={isPending} />
         <FormControl>
         <Text>Have an account ? <Link color='blue.400' href="/login">login</Link></Text>
         </FormControl>
        </Flex>
         
     );
}
 
export default Register;