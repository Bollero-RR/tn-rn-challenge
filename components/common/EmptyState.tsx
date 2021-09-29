import React from 'react';
import styled from 'styled-components/native';
import { Card, Typo } from '../ui';

const Container = styled.View`
  align-self: center;
`;

const EmptyState = () => {
  return (
    <Card>
      <Container>
        <Typo>No Data found</Typo>
      </Container>
    </Card>
  );
};

export default EmptyState;
