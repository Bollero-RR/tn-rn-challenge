import React from 'react';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack/lib/typescript/src/types';
import styled, { useTheme } from 'styled-components/native';
import { GoBack } from '../icons';
import { Typo } from '../ui';

const HeaderLeftContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
`;

const HeaderBackButton = (props: StackHeaderLeftButtonProps) => {
  const { colors } = useTheme();
  return (
    <HeaderLeftContainer onPress={props.onPress}>
      <GoBack />
      {props.label && <Typo color={colors.primary_light}>{props.label}</Typo>}
    </HeaderLeftContainer>
  );
};

export default HeaderBackButton;
