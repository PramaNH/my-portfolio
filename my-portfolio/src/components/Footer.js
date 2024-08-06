import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' Prama Neszhua Hoshe. All rights reserved.'}
      </Typography>
    </Container>
  </footer>
);

export default Footer;
