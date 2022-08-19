import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
