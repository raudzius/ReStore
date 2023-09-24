import {
  AppBar, Switch, Toolbar, Typography,
} from '@mui/material';
import React from 'react';

type Props = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const Header: React.FC<Props> = ({ darkMode, handleThemeChange }) => (
  <AppBar position="static" sx={{ marginBottom: 4 }}>
    <Toolbar>
      <Typography variant="h6" textTransform="uppercase">
        Re-Store
      </Typography>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </Toolbar>
  </AppBar>
);

export default Header;
