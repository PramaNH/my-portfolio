import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PortfolioItem from '../components/PortfolioItem';

const projects = [
  {
    title: 'Research Paper',
    description: 'A comprehensive study on [your research topic]. The research includes [brief description of methodology and findings].',
    image: 'path/to/research-paper-image.jpg',
    link: 'https://github.com/yourusername/research-paper',
  },
  {
    title: 'Internship Project 1',
    description: 'During my internship at [company name], I worked on [project description]. The project involved [technologies used and key outcomes].',
    image: 'path/to/internship-project1-image.jpg',
    link: 'https://github.com/yourusername/internship-project1',
  },
  {
    title: 'Internship Project 2',
    description: 'Another significant project during my internship was [project description]. This project focused on [technologies used and key outcomes].',
    image: 'path/to/internship-project2-image.jpg',
    link: 'https://github.com/yourusername/internship-project2',
  },
];

const Projects = () => (
  <Container className="container">
    <Typography variant="h4" component="h2" className="title" gutterBottom>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <PortfolioItem {...project} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
