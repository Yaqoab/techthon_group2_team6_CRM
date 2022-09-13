import { Box, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {NavLink } from "react-router-dom";
import { ShowContext } from "../../context/createcontext";

const SideBar = () => {
   const [show, setShow]=useState(false)
  //  export function handleClick(){
  //     setShow(!show);
  //  }
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
           <NavLink 
           to="/dashboard" 
           p='10px' 
           style={({isActive})=>isActive ? active : not }
           >Dashbord</NavLink>
           <NavLink 
           to="/projects" 
           style={({isActive})=>isActive ? active : not }
          
           >Projects</NavLink>
           <NavLink 
           to="/clients" 
           style={({isActive})=>isActive ? active : not }
           >clients</NavLink>
           </VStack>
         </Box>
        )
      }}</ShowContext.Consumer>
        
     );
}
export default SideBar ;