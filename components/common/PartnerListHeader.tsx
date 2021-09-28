import React from 'react';
import styled from 'styled-components/native';
import { Typo } from '../ui';

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin-bottom: 24px;
`;

const PartnerListHeader = () => (
  <Container>
    <Typo isBold sizePx={24}>
      Partners
    </Typo>
    <Typo>Here are some apps I was involved in:</Typo>
  </Container>
);
export default PartnerListHeader;
