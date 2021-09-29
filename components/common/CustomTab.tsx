import React from 'react';
import styled, { css } from 'styled-components/native';
import { useTheme } from 'styled-components';
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
      border-top-color: ${p.theme.colors.primary_light};
    `};
`;

type Props = {
  text: string;
  isFocused: boolean;
};

const CustomTab = ({ text, isFocused }: Props) => {
  const { colors } = useTheme();

  return (
    <TabContainer isFocused={isFocused}>
      <Typo isBold color={isFocused ? colors.primary_light : colors.black}>
        {text}
      </Typo>
    </TabContainer>
  );
};

export default CustomTab;
