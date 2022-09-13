import {AlertIcon, Alert} from "@chakra-ui/react";
const ErrorAlert = (props) => {
    return ( 
        <>
        {props.name && <Alert status="error">
        <AlertIcon />
       {props.msg} 
       </Alert>}
        </>
     );
}
 
export default ErrorAlert;