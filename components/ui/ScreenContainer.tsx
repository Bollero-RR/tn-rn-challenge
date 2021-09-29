import React from 'react';
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from './SafeAreaView';

type Props = {
  children?: React.ReactNode | undefined | React.ReactNode[];
  justifyContent?: string;
  alignItems?: string;
  bgColor?: string;
};

const Container = styled.View<Omit<Props, 'children'>>`
  flex: 1;
  padding-horizontal: 30px;
  padding-top: 24px;
  background-color: ${(p) => p.bgColor ?? p.theme.colors.lighter_gray};
  ${(p) =>
    p.justifyContent &&
    css`
      justify-content: ${p.justifyContent};
    `};

  ${(p) =>
    p.alignItems &&
    css`
      align-items: ${p.alignItems};
    `};
`;

const ScreenContainer = ({ children, justifyContent, alignItems, bgColor }: Props) => (
  <SafeAreaView bgColor={bgColor}>
    <Container bgColor={bgColor} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  </SafeAreaView>
);

export default ScreenContainer;
