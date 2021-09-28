import styled, { css } from 'styled-components/native';

type Props = {
  bgColor?: string;
};

export const SafeAreaView = styled.SafeAreaView<Props>`
  flex: 1;
  ${(p) =>
    p.bgColor &&
    css`
      background-color: ${p.bgColor};
    `};
`;

export default SafeAreaView;
