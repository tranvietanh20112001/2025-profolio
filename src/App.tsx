import Header from '@components/Header/Header';


import { Box } from '@mui/material';
import Index from '@routes/index.route';

function App() {

  return (
    <>
    <Box maxWidth={1440} minWidth={375} margin={"0 auto"}>
      <Header />
      <Index />
    </Box>
      
    </>
  )
}

export default App
