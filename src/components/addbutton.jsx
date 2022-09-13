import {Button, FormControl} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAdd } from "@fortawesome/free-solid-svg-icons";
const AddButton=(props)=>{
	return(
      <FormControl>
          <Button 
              float={['left','right' ]}
              fontWeight="bold"
              color="#496076"
          ><Link to={props.linkTo}><FontAwesomeIcon icon={faAdd} />{props.value}</Link></Button>
  </FormControl>
		)
};

export default AddButton;
