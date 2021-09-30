import { ActivityIndicator } from 'react-native';
import React from 'react';
import { ScreenContainer } from '../ui';
import { useTheme } from 'styled-components/native';

const LoadingIndicator = () => {
  const { colors } = useTheme();
  return (
    <ScreenContainer justifyContent="center" alignItems="center">
      <ActivityIndicator color={colors.primary_shadow} />
    </ScreenContainer>
  );
};

export default LoadingIndicator;
