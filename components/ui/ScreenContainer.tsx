import styled, { css } from 'styled-components/native';
import { SafeAreaView } from './';

type Props = {
  children?: React.ReactNode | undefined | React.ReactNode[];
  justifyContent?: string;
  alignItems?: string;
};

const Container = styled.View<Omit<Props, 'children'>>`
  flex: 1;
  padding-horizontal: 30px;
  padding-top: 24px;
  background-color: #f8f8fa;
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

const ScreenContainer = ({ children, justifyContent, alignItems }: Props) => (
  <SafeAreaView>
    <Container justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Container>
  </SafeAreaView>
);

export default ScreenContainer;
