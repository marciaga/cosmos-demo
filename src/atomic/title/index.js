import React from 'react';
import styled from 'styled-components';

const FancyHeader = styled.h1`
  font-size: 1em;
  text-align: center;
  color: ${({ primary }) => primary ? 'palevioletred' : 'royalblue' };
`;

const Title = ({ text, primary }) => (
  <FancyHeader primary={primary}>
    {text}
  </FancyHeader>
);

export default Title;
