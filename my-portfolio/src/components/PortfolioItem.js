import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const PortfolioItem = ({ title, description, image, link }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={title}
      loading="lazy"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
      <Button variant="contained" color="primary" href={link} target="_blank">
        View Project
      </Button>
    </CardContent>
  </Card>
);

export default PortfolioItem;
