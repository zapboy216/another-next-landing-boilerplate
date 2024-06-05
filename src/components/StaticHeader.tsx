import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: absolute;
  top: 15%;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 10;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
`;

const HeaderParagraph = styled.p`
  margin: 10px 0 0 0;
  font-size: 1.6rem;
`;

const StaticHeader = () => (
  <HeaderContainer>
    <HeaderTitle>Personal Injury Attorney</HeaderTitle>
    <HeaderParagraph>
      We provide expert legal advice for personal injury cases.
    </HeaderParagraph>
  </HeaderContainer>
);

export default StaticHeader;
