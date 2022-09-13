import {FormControl, FormLabel, Textarea} from "@chakra-ui/react";
const TextArea=(props)=>{
	return(
      <FormControl>
	      <FormLabel>{props.label}</FormLabel>
	      <Textarea height='200px' name={props.name} value={props.value} onChange={props.onchange} />
      </FormControl>
	)
}

export default TextArea;