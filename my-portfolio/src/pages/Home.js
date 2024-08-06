import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container className="container">
    <Typography variant="h2" component="h1" className="title" gutterBottom>
      Welcome to My Portfolio
    </Typography>
    <Typography variant="body1" className="description">
      This is a showcase of my work and achievements.
    </Typography>
  </Container>
);

export default Home;
