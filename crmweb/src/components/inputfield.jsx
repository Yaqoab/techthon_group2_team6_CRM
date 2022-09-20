import {FormControl, FormLabel, Input} from "@chakra-ui/react";
const InputField=(props)=>{
	return(
        <FormControl size={['sm','md']}>
		  <FormLabel>{props.label}</FormLabel>
		  <Input type={props.type} name={props.name} value={props.value} onChange={props.onchange} />
		</FormControl>
		)
}

export default InputField;