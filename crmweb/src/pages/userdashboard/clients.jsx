import { useState, useMemo, useCallback } from "react";
import DataTable from "react-data-table-component";
import {Box, Button, Stack} from "@chakra-ui/react";
import useFetch from "../../components/useFetch";
import Search from "../../components/search";
import AddButton from "../../components/addbutton";
import PageLoader from "../../components/pageloader";
import NavigateToLogin from "../../components/navigateToLogin";
import { Link } from "react-router-dom";
import axios from "axios";

const Clients =() => {
  const {navigate}=NavigateToLogin();  

// TABLE COLUMNS

const columns=[
   {
      name: 'Name',
       selector: row => row.name,
       sortable:true,
  },
   {
      name: 'Email',
       selector: row => row.email,
       sortable:true,
  },
   {
      name: 'Country',
       selector: row => row.country,
       sortable:true,
  },
   {
      name: 'State',
       selector: row => row.state,
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
const {data}=useFetch("/api/clients")

const filteredItem= data && data.filter((item)=>
  item.name.toLowerCase().includes(filterText.toLowerCase())
  );
// HANDLE DELETE
const deleteHandler=(event)=>{
  const del=window.confirm('want to delete this clients?')
  if (del) {
    axios.delete('/api/clients/'+event.target.id)
  .then(res=>console.log(res))
}

}
// HANDLE SELECTED ROWS
const handleSelectedRows=useCallback((state)=>{
  setSelectedRows(state.selectedRows)
},[])
// SEND EMAIL
const contextActions=useMemo(()=>{
   const sendEmail=()=>{
   setToggleCleared(true)
     const list=selectedRows.map(item=>item.email);
     console.log(list);
     sessionStorage.setItem('sendEmail', list)
     return list;
   }
  return(
    <Button bg='green.400' color='white' onClick={sendEmail}><Link to="/clients/sendemail">sendEmail</Link></Button>
    )
},[selectedRows])

const SubHeader=useMemo(()=>{
 return  <Stack direction={['column','row']} width='100%'>
                   <Search 
                  placeholder="search client"
                  value={filterText}
                  onchange={(val)=>setFilterText(val.target.value)}
                  />
                  <AddButton 
                  value="Add client"
                  linkTo="/clients/addclient" />
                 </Stack>
},[filterText])


    return ( 
       <Box
        padding="10px"
        >
        {filteredItem ?
              <DataTable 
			      title="Clients"
			      columns={columns}
            striped
			      data={filteredItem}
			      subHeader
            pagination
            subHeaderAlign={'left'}
            selectableRows
            onSelectedRowsChange={handleSelectedRows}
			      subHeaderComponent={SubHeader}
            contextActions={contextActions}
			     
              /> :
              <PageLoader />
        }
        </Box>
     );
}

 
export default Clients;
