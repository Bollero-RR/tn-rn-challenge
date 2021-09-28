import { ActivityIndicator } from 'react-native';
import React from 'react';
import { ScreenContainer } from '../ui';

const LoadingIndicator = () => (
  <ScreenContainer justifyContent="center" alignItems="center">
    <ActivityIndicator color="#000000" />
  </ScreenContainer>
);

export default LoadingIndicator;
