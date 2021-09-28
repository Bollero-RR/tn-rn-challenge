import React from 'react';
import styled, { css } from 'styled-components/native';
import { Typo } from '../ui';

const TabContainer = styled.View<{ isFocused?: boolean }>`
  align-items: center;
  width: 70%;
  flex: 1;
  padding-top: 17px;
  ${(p) =>
    p.isFocused &&
    css`
      border-top-width: 3px;
      border-top-color: #1fc4db;
    `};
`;

type Props = {
  text: string;
  isFocused: boolean;
};

const CustomTab = ({ text, isFocused }: Props) => {
  return (
    <TabContainer isFocused={isFocused}>
      <Typo isBold color={isFocused ? '#1fc4db' : '#000000'}>
        {text}
      </Typo>
    </TabContainer>
  );
};

export default CustomTab;
