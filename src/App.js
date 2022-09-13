import { ChakraProvider} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Dashboard from './pages/userdashboard/dashboard';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Layout from './layouts/dashboardlayout';
import Projects from './pages/userdashboard/projects';
import Clients from './pages/userdashboard/clients';
import ContextProvider from './context/createcontext';
import AddProject from './components/projects/addproject';
import AddClient from './components/clients/addclient';
import SendEmail from './components/clients/sendEmail';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <ContextProvider>
       <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
        <Route  element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path='projects' element={<Projects />} />
        <Route path='addproject' element={<AddProject />} />
        <Route path='clients' element={<Clients />} />
        <Route path='addclient' element={<AddClient />} />
         <Route path='sendEmail' element={<SendEmail />} />
        </Route>
      </Routes> 
      </ContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
