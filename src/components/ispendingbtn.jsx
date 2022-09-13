import {Button} from "@chakra-ui/react";
const IsPending = (props) => {
    return ( 
        <>
         {! props.name ? <Button type='submit' colorScheme={'facebook'}>submit</Button> :
          <Button type='submit'  colorScheme={'facebook'} disabled>Loading...</Button>
         }
        </>
     );
}
 
export default IsPending;