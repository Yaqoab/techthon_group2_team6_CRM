import {
  Box,
  Button,
  Stack,
  Square
} from '@chakra-ui/react';
import { useEffect, useState, useMemo } from "react";
import DataTable from 'react-data-table-component';
import useFetch from '../../components/useFetch';
import axios from "axios";
import Search from "../../components/search";
import AddButton from "../../components/addbutton";
import PageLoader from "../../components/pageloader";
import NavigateToLogin from "../../components/navigateToLogin";


const Projects = () => {
  const {navigate}=NavigateToLogin(); 
  //  TABLE COLUMNS
const columns = [
  {
      name: 'client',
       selector: row => row.client,
       sortable:true,
  },
  {
      name: 'title',
       selector: row => row.title,
       sortable:true,
       conditionalCellStyles:[
        {
          when:row=>{
            const d1=new Date(row.submitDay);
            const d2=new Date(new Date().toDateString());
            d1.valueOf();
            d2.valueOf();
            return d1 > d2;
          },
          style:{
            backgroundColor:'#a0acc5',
            color:'white'
          }
        }
      ]
  },
  {
      name:'startAt',
      selector:row => row.startAt,
      sortable:true,
  },
  {
    name:'payment',
    selector:row => row.payment,
    sortable:true,  
},
{
  name:'submitDay',
  selector:row => row.submitDay,
  sortable:true,
},
{
  cell: (row)=><Button bg='red.500' color='white' onClick={deleteHandler} id={row.id}>delete</Button>,
  ignoreRowClick: true,
  allowOverflow: true,
  button:true,
},

];

//GET DATA FROM DB AND FILTER DATA ITEM
const {data}=useFetch('http://localhost:8080/projects');
const [filterText, setFilterText]=useState('');

 const filteredItems=data && data.filter(item =>item.title && item.client.toLowerCase().includes(filterText.toLowerCase()))
 // EXPAND FOR QUERY DETAILS
const ExpandaleComponent=({data})=> <pre>{data.description}</pre>;
//DELETE HANLDLER
const deleteHandler=(event)=>{
    axios.delete('http://localhost:8080/projects/'+event.target.id)
  .then(res=>console.log(res))

}
// ONGOING PROJECTS
const ongoingProject=data && data.filter(item=>{
  const d1=new Date(item.submitDay);
  const d2=new Date(new Date().toDateString());
  d1.valueOf();
  d2.valueOf();
  return d1 > d2;
})
//SUBHEADER COMPONENTS
const SubHeader=useMemo(()=>{
 return  <Stack direction={['column','row']} width='100%'>
                   <Search 
                  placeholder="serch by client or title"
                  value={filterText}
                  onchange={(val)=>setFilterText(val.target.value)}
                  />
                   <Square 
                   width='100px' 
                   bg='#a0acc5' 
                   color='white'>{`(${ongoingProject && ongoingProject.length})`} ongoing</Square>
                  <AddButton 
                  value="Add project"
                  linkTo="/addproject" />
                 </Stack>
},[filterText, ongoingProject])
  return ( 
      <Box
      padding='10px'
      as='form' 
      >
          {filteredItems ?
          <DataTable
          title="Projects"
          columns={columns}
          data={filteredItems}
          pagination
          subHeader
          expandableRows
          expandableRowsComponent={ExpandaleComponent}
          subHeaderComponent={SubHeader}
          subHeaderAlign={'left'}
          defaultSortAsc={false}
          striped
          persistTableHead 
       />:
       <PageLoader />
      }

      </Box>
    
   );
  }

export default Projects;