import { Avatar, AvatarBadge, Heading, Box, Flex,Text,Stack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavigateToLogin from "../../components/navigateToLogin";
import useFetch from '../../components/useFetch';
import axios from "axios";

const Dashboard = () => {
   const {navigate}=NavigateToLogin(); 
const [crmUser, setCrmUser]=useState([]);
const [project, setProject]=useState(null);
const [client, setClient]=useState(null);

useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('crmuser'))
    setCrmUser(data)
},[])
const {data}=useFetch('http://localhost:8080/projects');
// const dat={data}=useFetch('http://localhost:8080/clients');
const user=crmUser && crmUser.map((name)=>{
    return <Heading size='md' key={name.id}><b>welcome:</b> {name.firstName+" "+name.surname}</Heading>
    },[crmUser]);

const ongoingProject=data && data.filter(item=>{
  const d1=new Date(item.submitDay);
  const d2=new Date(new Date().toDateString());
  d1.valueOf();
  d2.valueOf();
  return d1 > d2;
});
useEffect(()=>{
    axios.get('http://localhost:8080/projects').then(res=>{
      
      setProject(res.data)
    })
},[project]);
useEffect(()=>{
    axios.get('http://localhost:8080/clients').then(res=>{
      
      setClient(res.data)
    })
},[client]);


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
        <Flex wrap='wrap' textAlign='center' gap='2' >
          <Box w='150px' h='150px' bg='green.400' color='white' runded="md"boxShadow="md">
            <Heading size='md'>Total projects</Heading>
            <Heading size='md'>{`(${project && project.length})`}</Heading>
         </Box>
          <Box w='150px' h='150px' bg='green.400' color='white' runded="md"boxShadow="md">
            <Heading size='md'>Ongoing projects</Heading>
            <Heading size='md'>{`(${ongoingProject && ongoingProject.length})`}</Heading>
         </Box>
         <Box w='150px' h='150px' bg='green.400' color='white' runded="md"boxShadow="md">
            <Heading size='md'>Customers</Heading>
             <Heading size='md'>{`(${client && client.length})`}</Heading>
         </Box>
        </Flex>
        </Box>
     );
}
 
export default Dashboard;