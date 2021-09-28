import React from 'react';
import RNRestart from 'react-native-restart';
import { Button, ScreenContainer, Typo } from '../ui';

const ErrorStateView = () => {
  return (
    <ScreenContainer justifyContent="center" alignItems="center">
      <Typo>Oops!</Typo>
      <Typo>Something went wrong</Typo>
      <Button text="Reset" handlePress={() => RNRestart.Restart()} />
    </ScreenContainer>
  );
};

export default ErrorStateView;
