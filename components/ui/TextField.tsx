import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  color: white;
  border-width: 1px;
  border-color: #d1d5db;
  border-radius: 5px;
  color: #0a132c;
  padding: 10px;
  width: 100%;
`;

const Container = styled.View``;

const Error = styled.Text`
  color: #f33a3a;
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
  return (
    <Container>
      <Input
        selectionColor="#1FC4DB"
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
