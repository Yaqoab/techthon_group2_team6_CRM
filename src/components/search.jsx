 import {FormControl, Input} from "@chakra-ui/react";
const Search=(props)=>{
	return(
          <FormControl>
            <Input 
            size="md"
           type='text'
           width='200px'
           placeholder={props.placeholder}
            value={props.value} 
            onChange={props.onchange} />
         </FormControl>
		)
};

export default Search;