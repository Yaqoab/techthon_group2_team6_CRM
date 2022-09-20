import {Heading} from "@chakra-ui/react";
import InputField from "../inputfield";
import TextArea from "../textarea";

const ProjectForm = (props) => {
    return ( 
            <>
                <Heading size='md' textAlign="center">Add project</Heading>
          <InputField 
           label='Client'
           type='text'
           name='client'
           value={props.client}
           onchange={props.change}
          />
           <InputField 
           label='Title'
           type='text'
           name='title'
           value={props.title}
           onchange={props.change}
          />
          <InputField 
           label='Payment'
           type='number'
           name='payment'
           value={props.payment}
           onchange={props.change}
          />
           <InputField 
           label='Submit at'
           type='date'
           name='submitDay'
           value={props.date}
           onchange={props.change}
          />
          <TextArea 
           label='Description'
           name='description'
           value={props.description}
           onchange={props.change}
          />
          </>
     );
}
 
export default ProjectForm;