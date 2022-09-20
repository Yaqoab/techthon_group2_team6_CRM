import {Box, Spinner} from "@chakra-ui/react"
const PageLoader=()=>{
	return(
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
         <Spinner 
         thickness='4px'
         speed='0.65s'
         emptyColor='gray.200'
         color='blue.500'
         size='xl'
         />
         </Box>
		)
}

export default PageLoader;