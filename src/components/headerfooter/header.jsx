import { Box, Wrap, WrapItem, Spacer, VStack, Button, Flex, Heading} from "@chakra-ui/react";
import { ShowContext } from "../../context/createcontext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
   
    return ( 
        <ShowContext.Consumer>{(context)=>{
            const {handleClick, logout}=context;
            return(
            <Box
            width='100%' 
            padding='10px'
            bg='#546d76'
            color='#fff'
            >
                <Wrap>
                    <WrapItem display={['block','none']}><FontAwesomeIcon onClick={handleClick} icon={faBars} /></WrapItem>
                    <WrapItem display={['none','block']} ><Heading size='md'>logo</Heading></WrapItem>
                      <Spacer />
                    <WrapItem><Button
                     size='sm' 
                     color='blackAlpha.700'
                     onClick={logout}
                     >logout</Button></WrapItem>
                </Wrap>
                {/* <Box display={['block','none']}>
                <FontAwesomeIcon onClick={handleClick} icon={faBars} />
                </Box>
              <Box  >
              logo
              </Box> */}
             
              </Box>
            )
        }}</ShowContext.Consumer>
     );
}
 
export default Header;