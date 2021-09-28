import React from 'react';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack/lib/typescript/src/types';
import styled from 'styled-components/native';
import GoBack from '../icons/GoBack';
import { Typo } from '../ui';

const HeaderLeftContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
`;

const HeaderBackButton = (props: StackHeaderLeftButtonProps) => {
  return (
    <HeaderLeftContainer onPress={props.onPress}>
      <GoBack />
      {props.label && <Typo color="#1fc4db">{props.label}</Typo>}
    </HeaderLeftContainer>
  );
};

export default HeaderBackButton;
