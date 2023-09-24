import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Container>
      <Catalog />
    </Container>
  </>
);

export default App;
