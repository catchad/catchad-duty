import React from 'react';
import styled from 'react-emotion';

const Text = styled.span`
  position: relative;
  display: block;
  font-size: 0.75rem;
  text-align: center;
  opacity: 0.5;
  margin: 40px 0 0 0;
  font-weight: 300;
`;

const MostBottom = () => {
  return <Text>這是最底部</Text>;
};

export default MostBottom;
