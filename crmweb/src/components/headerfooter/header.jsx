import { Box, Wrap, WrapItem, Spacer, VStack, Button, Flex, Heading} from "@chakra-ui/react";
import { ShowContext } from "../../context/createcontext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faRemove } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
   
    return ( 
        <ShowContext.Consumer>{(context)=>{
            const {showmenu,handleClick, logout}=context;
            return(
            <Box
            width='100%' 
            padding='10px'
            bg='#546d76'
            color='#fff'
            >
                <Wrap>
                    <WrapItem display={['block','none']} fontWeight='25px'>
                    {showmenu ? 
                      <FontAwesomeIcon onClick={handleClick} icon={faRemove} />
                      :<FontAwesomeIcon onClick={handleClick} icon={faBars} />}
                    </WrapItem>
                    <WrapItem display={['none','block']} ><Heading size='md'>logo</Heading></WrapItem>
                      <Spacer />
                    <WrapItem><Button
                     size='sm' 
                     color='blackAlpha.700'
                     onClick={logout}
                     >logout</Button></WrapItem>
                </Wrap>
                              
             
              </Box>
            )
        }}</ShowContext.Consumer>
     );
}
 
export default Header;