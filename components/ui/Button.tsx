import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Typo from './Typo';

const Container = styled.TouchableOpacity`
  color: white;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  background-color: #1fc4db;
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
  return (
    <Container onPress={handlePress} disabled={isLoading}>
      {isLoading ? <ActivityIndicator color="#000000" /> : <Typo color="#FFFFFF">{text}</Typo>}
    </Container>
  );
};

export default Button;
