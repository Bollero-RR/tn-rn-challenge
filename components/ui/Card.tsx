import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

const Card = styled.View`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  justify-content: center;
  ${Platform.OS === 'ios'
    ? css`
        shadow-color: #000;
        shadow-offset: 0px 1px;
        shadow-opacity: 0.1;
        shadow-radius: 2px;
      `
    : css`
        elevation: 1;
      `};
`;

export default Card;
