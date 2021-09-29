import React, { Ref, RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { InputTypes } from '../../interfaces/form/common';

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
  type: InputTypes;
  errorMessage?: string;
  // To.Do find out the correct type for ref, as none of the bellow types are not working
  inputRef?: RefObject<TextInput> | Ref<TextInput> | undefined;
} & TextInputProps;

const TextField = ({ type, errorMessage, inputRef, ...props }: Props) => {
  const { colors } = useTheme();
  return (
    <Container>
      {/* @ts-ignore */}
      <Input ref={inputRef} selectioncolor={colors.primary_light} secureTextEntry={type === 'password'} {...props} />
      <Error>{errorMessage}</Error>
    </Container>
  );
};

export default TextField;
