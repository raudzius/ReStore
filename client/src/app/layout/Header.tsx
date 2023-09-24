import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  console.log('');
  return (
    <AppBar position="static" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Typography variant="h6" textTransform="uppercase">
          Re-Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
