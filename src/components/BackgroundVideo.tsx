import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  height: 70vh;
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 69, 79, ${({ opacity }) => opacity});
`;

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <Video autoPlay muted loop>
        <source
          src="https://storage.googleapis.com/dinan/videos/AdobeStock_314969901_Video_4K_Preview.mp4"
          type="video/mp4"
        />
      </Video>
      <Overlay opacity={0.7} /> {/* Adjust opacity here */}
    </VideoContainer>
  );
};

export default BackgroundVideo;
