import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
// import Footer from "../components/footer";
import SideBar from "../components/headerfooter/sidebar";
import Header from "../components/headerfooter/header";
// import Dashboard from "../pages/userdashboard/dashboard";

const AdminLayout = () => {
  const navlink=[
    {
     id:1,
     name:"Admin",
     link:"/admin"
    },
    {
     id:2,
     name:"Users",
     link:"/users"
    }
    ];
    return ( 

        <Grid templateAreas={
            [`"header"
              "sidebar"
               "main"`,
             `"header header header"
              "sidebar main main"
              "sidebar main main"`
            ]}
            templateColumns={['1fr','1fr 2fr 2fr']} 
            >
            <GridItem  area='header'>
              <Header />
            </GridItem>
             <GridItem area='sidebar'>
             <SideBar navlink={navlink} />
            </GridItem> 
            <GridItem area='main'>
            <Box  overflow='scroll' height='90vh' pb='60px'>
                <Outlet />
            </Box>
            </GridItem>
            
        </Grid>
          
     );
}
 
export default AdminLayout;