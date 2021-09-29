import styled, { css } from 'styled-components/native';

type Props = {
  isBold?: boolean;
  sizePx?: number;
  color?: string;
  marginLeft?: number;
};

//To.Do update this component to not rely on Color prop from component.
const Typo = styled.Text<Props>`
  font-weight: ${(p) => (p.isBold ? 'bold' : 'normal')};
  font-size: ${(p) => p.sizePx ?? 16}px;
  color: ${(p) => p.color ?? p.theme.colors.black};

  ${(p) =>
    p.marginLeft &&
    css`
      margin-left: ${p.marginLeft}px;
    `};
`;

export default Typo;
