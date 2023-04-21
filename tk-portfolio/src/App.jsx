import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <ChakraProvider>
      <PageContainer />
      </ChakraProvider>
  );
}

export default App;
