import { Box, Stack, Heading, Button } from "@chakra-ui/react";
import {useState, useEffect} from 'react';
import TextArea from "../textarea";
const SendEmail=()=>{
	const [emailValue, setEmailValue]=useState('');
	const [reciever, setReciever]=useState([]);
	const [title, setTitle]=useState('Dear custommer')
	useEffect(()=>{
      const clents=sessionStorage.getItem('sendEmail');
      setReciever(clents)
	},[reciever]);

	const handleSubmit=(e)=>{
       e.preventDefault();
       alert('hello')
	}

	return(
        <Box
         padding='10px'
        >
           <Stack 
           direction='column'
           width={['90%','70%']}
           margin='0 auto'
           mt='30px'
           padding='10px'
           border='1px solid #eee'
           runded="md"
           boxShadow="md"
           as='form'
           onSubmit={handleSubmit}
           >
            <Heading size='md' textAlign='center'>send email</Heading>
	        <Box 
	        border='1px solid #eee' 
	        borderRadius='10px'
	        padding='10px'
	        >
             {reciever}
             </Box>	
            <Box 
	        border='1px solid #eee' 
	        borderRadius='10px'
	        padding='10px'
	        >
             {title}
             </Box>
           
	          <TextArea 
	           label='Compose email'
	           name='description'
	           value={emailValue}
	           onchange={(val)=>setEmailValue(val.target.value)}
	          />
	           <Button bg='green.400' color='white'>send</Button>
           </Stack>
          
        </Box>
		)
}

export default SendEmail;