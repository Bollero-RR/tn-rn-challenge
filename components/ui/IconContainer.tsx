import styled, { css } from 'styled-components/native';

type Props = {
  rotate?: number;
  padding?: number;
};

const IconContainer = styled.View<Props>`
  ${(p) =>
    p.rotate &&
    p.rotate > 0 &&
    css`
      transform: rotate(${p.rotate}deg);
    `}

  ${(p) =>
    p.padding &&
    p.padding > 0 &&
    css`
      padding: ${p.padding}px;
    `}
`;
export default IconContainer;
