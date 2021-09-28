import React from 'react';
import styled from 'styled-components/native';
import { useAppState } from '../providers/useAppState';
import { ScreenContainer, Typo } from '../components/ui';

const Image = styled.Image`
  width: 256px;
  height: 160px;
`;

const Container = styled.View`
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const AccountSection = () => {
  const { user } = useAppState();

  return (
    <ScreenContainer bgColor="#FFFFFFFF" alignItems="center" justifyContent="center">
      <Image source={require('../assets/finish-illustration.png')} />
      <Container>
        <Typo isBold sizePx={24}>
          Hello, {user.username}
        </Typo>
        <Typo sizePx={14}>Glad you are here, Hope to see you soon.</Typo>
      </Container>
    </ScreenContainer>
  );
};

export default AccountSection;
