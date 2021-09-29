import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import Typo from './Typo';

const Container = styled.TouchableOpacity<{ isLoading?: boolean }>`
  color: white;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: ${(p) => (p.isLoading ? p.theme.colors.light_gray : p.theme.colors.primary_light)};
  align-items: center;
  padding-vertical: 9px;
`;

type Props = {
  handlePress: () => void;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button = ({ handlePress, text, isLoading }: Props) => {
  const { colors } = useTheme();
  return (
    <Container isLoading={isLoading} onPress={handlePress} disabled={isLoading} accessibilityLabel={`clicked on`}>
      {isLoading ? <ActivityIndicator color={colors.black} /> : <Typo color={colors.white}>{text}</Typo>}
    </Container>
  );
};

export default Button;
