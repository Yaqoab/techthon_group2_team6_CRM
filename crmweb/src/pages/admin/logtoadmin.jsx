import LoginComponent from "../../components/logincomponent";
const LogToAdmin = () => {
    return ( 
      <LoginComponent
        title="Login to admin"
        getfrom="/api/admin"
        store='crmadmin'
        if='crmadmin'
        navigateTo='/admin'
       />
     );
}
 
export default LogToAdmin;