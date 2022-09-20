import { Avatar, AvatarBadge, Heading, Box, Flex,Stack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavigateToLogin from "../../components/navigateToLogin";
import useFetch from '../../components/useFetch';

const Dashboard = () => {
   const {navigate}=NavigateToLogin(); 
const [crmUser, setCrmUser]=useState([]);

useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('crmuser'))
    setCrmUser(data)
},[])
const {data}=useFetch('/api/projects')
const user=crmUser && crmUser.map((name)=>{
    return <Heading color='#555' size='md' key={name.id}><b>welcome:</b> {name.firstName+" "+name.surname}</Heading>
    },[crmUser]);

const ongoingProject=data && data.filter(item=>{
  const d1=new Date(item.submitDay);
  const d2=new Date(new Date().toDateString());
  d1.valueOf();
  d2.valueOf();
  return d1 > d2;
});
const {data:project}=useFetch('/api/projects');

const {data:client}=useFetch('/api/clients');


    return ( 
        <Box
        padding='10px'
        >
        <Stack direction='row' spacing={4} mb='20px'>
             <Avatar>
                 <AvatarBadge boxSize='1em' bg='green.300' />
             </Avatar>
            {user} 
        </Stack>
        <Flex 
        wrap='wrap' 
        textAlign='center' 
        gap='2' >
          <Box 
          w='150px' 
          h='150px' 
          bg='#353a42' 
          color='white' 
          runded="md"
          boxShadow="md" 
          borderRadius='10px'>
            <Heading size='md'>Total projects</Heading>
            <Heading size='md'>{`(${project && project.length})`}</Heading>
         </Box>
          <Box 
          w='150px' 
          h='150px' 
          bg='#1f7e68' 
          color='white' 
          runded="md"
          boxShadow="md" 
          borderRadius='10px'>
            <Heading size='md'>Ongoing projects</Heading>
            <Heading size='md'>{`(${ongoingProject && ongoingProject.length})`}</Heading>
         </Box>
         <Box 
         w='150px' 
         h='150px' 
         bg='#0f3760' 
         color='white' 
         runded="md"
         boxShadow="md" 
         borderRadius='10px'>
            <Heading size='md'>Clients</Heading>
             <Heading size='md'>{`(${client && client.length})`}</Heading>
         </Box>
        </Flex>
        </Box>
     );
}
 
export default Dashboard;