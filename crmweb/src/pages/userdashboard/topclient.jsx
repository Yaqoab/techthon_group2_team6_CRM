import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import NavigateToLogin from "../../components/navigateToLogin";

const Chart = () => {
  const {navigate}=NavigateToLogin(); 
  const[obj, setObj]=useState({})

  useEffect(()=>{
  axios.get('/api/projects').then(res=>{
    setObj(res.data)
  });

},[])

const rest=obj && Object.values(obj).map(x=>x.client).reduce((acc, curr)=>{
 acc[curr] = (acc[curr] || 0) + 1;
  return acc;
 },{});

  const labels=[];
  const data=[];
for(let key in rest){
  data.push(rest[key]);
  labels.push(key);
}

// const to5Values=Object.values(data).sort((a,b)=>b-a).slice(0,5);
// const top5Keys=Object.keys(labels).sort((a,b)=>obj[b]-obj[a]).slice(0,5);
// console.log(top5Keys, to5Values)
const topData=Object.values(data).slice(0,5);
const topLabels=Object.values(labels).slice(0,5);
console.log(topLabels)
  
    const barChartData ={
    labels: topLabels,
    datasets:[
     {
      data:topData,
      backgroundColor:[
       "rgba(53, 50, 72, 0.6)",
       "rgba(72, 104, 59, 0.6)",
       "rgba(72, 101, 205, 0.6)",
       "rgba(175, 67, 56, 0.6)",
       "rgba(175, 67, 56, 0.6)",
      ]
     }
    ]
  };
 
  return (
   <Box padding='10px' w={['350px','500px','700px']} margin='0 auto'>
     <Bar
      data={barChartData}
    />
   </Box>
    );
};

export default Chart;