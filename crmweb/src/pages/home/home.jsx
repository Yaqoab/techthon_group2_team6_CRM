import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <Flex
        height="100%"
        justifyContent='center'
        alignItems='center'
        style={{
        	backgroundRepeat:"no-repeat",
            backgroundSize:'cover',
            backgroundImage:'url(images/computer.webp)',
            backgroundPosition:'center'
        }}
        >
        <Box 
        textAlign='center' 
        color='white' 
        padding='10px'
        borderRadius='10px'
        bg='teal'>
        	<Heading size={['md','lg']}>Welcome to CRM web app</Heading>
        	<Text>Login to your account</Text>
        	<Button color='black'><Link to='/login'>Login</Link></Button>
        </Box>
        </Flex>
     );
}
 
export default Home;