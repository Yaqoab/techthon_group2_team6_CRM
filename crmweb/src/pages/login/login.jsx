import LoginComponent from "../../components/logincomponent";
const Login = () => {
   

    return ( 
      <LoginComponent
        title="Login"
        getfrom="/api/user/login"
        store='crmuser'
        if='crmuser'
        navigateTo='/dashboard'
       />
     );
}
 
export default Login;