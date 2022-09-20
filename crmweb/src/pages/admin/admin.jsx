import { Avatar, AvatarBadge, Heading, Box,Stack} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

const Admin=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('crmadmin')){
         navigate('/logtoadmin',{replace:true})
        }    
     },[navigate]);
	return(
      <Box padding='10px'>
          <Stack direction='row' spacing={4} mb='20px'>
             <Avatar>
                 <AvatarBadge boxSize='1em' bg='green.300' />
             </Avatar>
             <Heading size='md' color='#555'>Welcome Admin</Heading> 
        </Stack>
      </Box>
		)
}

export default Admin;