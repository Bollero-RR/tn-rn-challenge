import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const Input = styled.TextInput`
  color: white;
  border-width: 1px;
  border-color: ${(p) => p.theme.colors.light_gray};
  border-radius: 5px;
  color: ${(p) => p.theme.colors.black};
  padding: 10px;
  width: 100%;
`;

const Container = styled.View``;

const Error = styled.Text`
  color: ${(p) => p.theme.colors.red};
  font-size: 12px;
  padding-vertical: 5px;
`;

type Props = {
  placeholder?: string;
  type: string;
  onChangeText: (value: string) => void;
  onBlur: () => void;
  value?: string;
  errorMessage?: string;
};

const TextField = ({ placeholder, type, onChangeText, onBlur, value, errorMessage }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Input
        selectioncolor={colors.primary_light}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
      <Error>{errorMessage}</Error>
    </Container>
  );
};

export default TextField;
