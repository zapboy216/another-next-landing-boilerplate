import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 50px 0;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  text-align: center;
  position: relative;
  z-index: 20; /* Ensure this is higher than other components */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin-bottom: 40px;
  font-size: 1.2rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ServiceCard = styled.div`
  background: rgba(
    255,
    255,
    255,
    0.9
  ); /* Semi-transparent background for cards */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const LearnMoreLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const services = [
  { icon: '🔧', title: 'Personal Injury Cases', link: '#' },
  { icon: '🏠', title: 'Family Law & Divorce', link: '#' },
  { icon: '⚖️', title: 'Criminal Defense', link: '#' },
  { icon: '💼', title: 'Commercial Litigation', link: '#' },
  { icon: '🖋️', title: 'Transactional Law', link: '#' },
  { icon: '📄', title: 'Contract Disputes', link: '#' },
];

const ServicesSection = () => (
  <SectionContainer>
    <Title>Our Services</Title>
    <Description>
      Experienced Florida personal injury attorneys aggressively fighting for
      your rights and interests. Our skilled and well-versed attorneys have over
      130 years of combined litigation experience.
    </Description>
    <ServicesContainer>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <LearnMoreLink href={service.link}>Learn More</LearnMoreLink>
        </ServiceCard>
      ))}
    </ServicesContainer>
  </SectionContainer>
);

export default ServicesSection;
