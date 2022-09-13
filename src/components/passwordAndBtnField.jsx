import {
	Button,
    FormControl, 
    FormLabel, 
    Input, 
    InputGroup, 
    InputRightElement,
 } from "@chakra-ui/react";
const PasswordAndShowBtn=(props)=>{
	return(
    <FormControl size={['sm','md']}>
             <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input name={'password'} 
            type={props.type}
            onChange={props.onchange}
              placeholder={"password"}
              />
              <InputRightElement width='4.5rem'>
                  <Button h='1.7rem'
                   size='sm'
                   onClick={props.onclick}
                  >{props.buttonValue}</Button>
              </InputRightElement>
            </InputGroup>
         </FormControl>
	)
}

export default PasswordAndShowBtn;