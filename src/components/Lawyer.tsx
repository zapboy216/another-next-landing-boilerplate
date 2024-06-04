import React from 'react';
import styled from 'styled-components';

const LawyerImageContainer = styled.div`
  position: absolute;
  right: 50px;
  bottom: 100px;
`;

const LawyerImage = styled.img`
  max-height: 70vh;
`;

const Lawyer = () => (
  <LawyerImageContainer>
    <LawyerImage
      src="https://storage.googleapis.com/dinan/LegalFirm/med228.png"
      alt="Fictional Lawyer"
    />
  </LawyerImageContainer>
);

export default Lawyer;
