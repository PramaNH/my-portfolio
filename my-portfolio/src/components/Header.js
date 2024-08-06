import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
  marginRight: '20px',
});

const Header = () => (
  <AppBar position="static" className="header">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        My Portfolio
      </Typography>
      <StyledLink to="/"><Button color="inherit">Home</Button></StyledLink>
      <StyledLink to="/about"><Button color="inherit">About</Button></StyledLink>
      <StyledLink to="/projects"><Button color="inherit">Projects</Button></StyledLink>
      <StyledLink to="/contact"><Button color="inherit">Contact</Button></StyledLink>
    </Toolbar>
  </AppBar>
);

export default Header;
