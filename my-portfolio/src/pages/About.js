import React from 'react';
import { Container, Typography } from '@mui/material';

const aboutMe = {
  bio: "I am Prama Neszhua Hoshe, currently in the last semester of my university studies. I have recently completed a research paper on [your research topic]. Prior to this, I completed an internship from February 2023 to February 2024, where I gained hands-on experience in [relevant skills and technologies].",
  skills: ['JavaScript', 'React', 'Node.js', 'Java', 'SQL'],
  education: 'Bachelor’s degree in Computer Science from [Your University Name]',
  experience: [
    {
      role: 'Intern',
      company: '[Company Name]',
      duration: 'Feb 2023 - Feb 2024',
      description: 'Worked on various projects involving [brief description of responsibilities and technologies used].',
    },
  ],
  achievements: ['Completed a comprehensive research paper on [your research topic]', 'Gained significant industry experience during my internship'],
};

const About = () => (
  <Container className="container">
    <Typography variant="h4" component="h2" className="title" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" className="description">
      {aboutMe.bio}
    </Typography>
    <Typography variant="h6" component="h3" className="subtitle">
      Skills
    </Typography>
    <ul>
      {aboutMe.skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
    <Typography variant="h6" component="h3" className="subtitle">
      Education
    </Typography>
    <Typography variant="body1" className="description">
      {aboutMe.education}
    </Typography>
    <Typography variant="h6" component="h3" className="subtitle">
      Experience
    </Typography>
    <ul>
      {aboutMe.experience.map(exp => (
        <li key={exp.role}>
          <strong>{exp.role}</strong> at {exp.company} ({exp.duration}): {exp.description}
        </li>
      ))}
    </ul>
    <Typography variant="h6" component="h3" className="subtitle">
      Achievements
    </Typography>
    <ul>
      {aboutMe.achievements.map(achievement => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
  </Container>
);

export default About;
