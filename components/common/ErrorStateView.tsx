import React from 'react';
import styled from 'styled-components/native';
import { useNavigationHooks } from '../../hooks/useNavigationHooks';
import { Button, ScreenContainer, Typo } from '../ui';

const MessageContainer = styled.View`
  padding-vertical: 15px;
`;

const ErrorStateView = () => {
  const { goBack } = useNavigationHooks();
  //To.Do change the way I'm handling the reset option.
  //As library I used to implement in previous projects doesn't work on expo.
  // Probably adding the refetch option for queries.
  return (
    <ScreenContainer justifyContent="center" alignItems="center">
      <MessageContainer accessible={true} accessibilityRole="alert">
        <Typo isBold>Oops!</Typo>
        <Typo>Something went wrong</Typo>
      </MessageContainer>
      <Button
        accessibilityLabel="Go back"
        accessibilityHint="Navigates to the previous screen"
        text="GoBack"
        handlePress={goBack}
      />
    </ScreenContainer>
  );
};

export default ErrorStateView;
