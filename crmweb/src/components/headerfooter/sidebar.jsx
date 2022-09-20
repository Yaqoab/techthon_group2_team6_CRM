import { Box, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {NavLink } from "react-router-dom";
import { ShowContext } from "../../context/createcontext";

const SideBar = (props) => {
   const [show, setShow]=useState(false)
    const active={
        color:'black', 
        background:'white', 
        padding:'2px',
        borderRadius:'5px',
        width:'100%'
       };
       const not={
        color:'white', 
        padding:'3px',
        width:'100%'
       };
    

   const navBar=props.navlink && props.navlink.map(nav=>{
           return  <NavLink key={nav.id}
           to={nav.link} 
           p='10px' 
           style={({isActive})=>isActive ? active : not }
           >{nav.name}</NavLink>
          });

    return ( 
      <ShowContext.Consumer>{(context)=>{
        const {showmenu}=context;
        return(
          <Box 
          p='10px'
          bg='#546d76'
          color='#fff'
          height='100vh'
          display={[showmenu ? 'block' : 'none','block']}
         >
           <VStack>
          {navBar}
           </VStack>
         </Box>
        )
      }}</ShowContext.Consumer>
        
     );
}
export default SideBar ;