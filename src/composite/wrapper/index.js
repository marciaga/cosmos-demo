import React from 'react';
import styled from 'styled-components';
import Title from '../../atomic/title';

const Wrapper = styled.section`
  color: palevioletred;
  padding: 4em;
  width: 100%;
  height: 100%;
  background: papayawhip;

  @media (max-width: 600px) {
    background: mediumseagreen;

    > h1 {
      color: papayawhip;
    }
  }
`;

const WrappedSection = ({ text }) => (
  <Wrapper>
    <Title
      text={text}
      primary
    />
  </Wrapper>
);

export default WrappedSection;
