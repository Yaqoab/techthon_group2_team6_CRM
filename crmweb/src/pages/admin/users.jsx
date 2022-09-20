import { useState, useEffect, useMemo, useCallback } from "react";
import DataTable from "react-data-table-component";
import {Box, Button, Stack} from "@chakra-ui/react";
import useFetch from "../../components/useFetch";
import Search from "../../components/search";
import PageLoader from "../../components/pageloader";
import NavigateToLogin from "../../components/navigateToLogin";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Users=()=>{
 const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('crmadmin')){
         navigate('/logtoadmin',{replace:true})
        }    
     },[navigate]);
 // TABLE COLUMNS
const columns=[
   {
      name: 'FirstName',
       selector: row => row.firstName,
       sortable:true,
  },
   {
      name: 'SurName',
       selector: row => row.surname,
       sortable:true,
  },
   {
      name: 'Email',
       selector: row => row.email,
       sortable:true,
  },
  {
  cell: (row)=><Button bg='red.500' color='white' onClick={deleteHandler} id={row.id}>delete</Button>,
  ignoreRowClick: true,
  allowOverflow: true,
  button:true,
},

];
const [filterText, setFilterText]=useState('')
const [selectedRows, setSelectedRows]=useState([]);
const [toggleCleared, setToggleCleared]=useState(false);
//GET DATA FROM DATABASE
const {data}=useFetch("/api/user")
// console.log(data)

const filteredItem= data && data.filter((item)=>
  item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );
// HANDLE DELETE
const deleteHandler=(event)=>{
  const del=window.confirm('want to delete this user?')
  if (del) {
    axios.delete('/api/user/'+event.target.id)
  .then(res=>console.log(res))
}
};

const SubHeader=useMemo(()=>{
 return  <Stack direction={['column','row']} width='100%'>
                   <Search 
                  placeholder="search client"
                  value={filterText}
                  onchange={(val)=>setFilterText(val.target.value)}
                  />
                 </Stack>
},[filterText])


	return(
        <Box padding='10px'>
        {filteredItem ?
           <DataTable 
	       title="Clients"
	       columns={columns}
         striped
			   data={filteredItem}
			   subHeader
         pagination
         subHeaderAlign={'left'}
			   subHeaderComponent={SubHeader} 
              />:
      <PageLoader />
            }
          
        </Box>
		)
};

export default Users;