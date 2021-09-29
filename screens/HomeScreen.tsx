import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Button, KeyboardAvoidingView, SafeAreaView, TextField, Typo } from '../components/ui';
import { useLogin } from '../hooks/useLogin';
import { useNavigationHooks } from '../hooks/useNavigationHooks';
import { Form, Input } from '../interfaces/form/login';
import { useAppState } from '../providers/useAppState';
import { requiredValidation } from '../utils/form/form';
import { INPUTS } from '../utils/form/login';

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/

const InputsContainer = styled.View`
  height: 210px;
  justify-content: space-between;
  padding-vertical: 40px;
  width: 100%;
`;

const Container = styled.Pressable`
  flex: 1;
  background-color: ${(p) => p.theme.colors.white};
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

export default function HomeScreen() {
  const { navigateToListScreen } = useNavigationHooks();
  const { handleUser } = useAppState();
  const { mutate: login, isLoading } = useLogin();
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    login(data, {
      onSuccess: (response) => {
        handleUser(response);
        navigateToListScreen();
        // To.DO When implementing OnBoarding flow, remove reset form form and directly reset navigation state with Authenticated App
        reset({});
      },
    });
  };

  return (
    <SafeAreaView bgColor={colors.white}>
      <KeyboardAvoidingView behavior="padding">
        <Container onPress={Keyboard.dismiss}>
          <View>
            <Typo isBold sizePx={24}>
              Welcome
            </Typo>
          </View>
          <InputsContainer>
            {React.Children.toArray(
              INPUTS.map((input: Input) => (
                <Controller
                  rules={requiredValidation}
                  control={control}
                  name={input.name}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <TextField
                      onBlur={onBlur}
                      value={value}
                      onChangeText={(value) => onChange(value)}
                      type={input.type}
                      placeholder={input.placeholder}
                      errorMessage={errors[input.name]?.message}
                    />
                  )}
                />
              ))
            )}
          </InputsContainer>
          <Button text="Sign in" handlePress={handleSubmit(onSubmit)} isLoading={isLoading} />
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
