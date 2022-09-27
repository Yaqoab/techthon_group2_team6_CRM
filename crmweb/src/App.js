import { ChakraProvider} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Dashboard from './pages/userdashboard/dashboard';
import Register from './pages/register/register';
import Login from './pages/login/login';
import LogToAdmin from './pages/admin/logtoadmin';
import Layout from './layouts/dashboardlayout';
import Projects from './pages/userdashboard/projects';
import Admin from './pages/admin/admin';
import Clients from './pages/userdashboard/clients';
import Chart from './pages/userdashboard/topclient';
import ContextProvider from './context/createcontext';
import AddProject from './components/projects/addproject';
import AddClient from './components/clients/addclient';
import SendEmail from './components/clients/sendEmail';
import AdminLayout from './layouts/adminLayout';
import Users from './pages/admin/users';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <ContextProvider>
       <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logtoadmin" element={<LogToAdmin />} />
        <Route path="register" element={<Register />} />
        <Route  element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='projects' element={<Projects />} />
        <Route path='/projects/addproject' element={<AddProject />} />
        <Route path='clients' element={<Clients />} />
        <Route path='/clients/addclient' element={<AddClient />} />
        <Route path='/clients/sendemail' element={<SendEmail />} />
         <Route path='/topclient' element={<Chart />} />
        </Route>
        <Route element={<AdminLayout />}>
        <Route path='admin' element={<Admin />} />
        <Route path='users' element={<Users />}  />
        </Route>
      </Routes> 
      </ContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
