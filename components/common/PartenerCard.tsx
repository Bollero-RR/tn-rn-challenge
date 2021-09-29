import React, { memo } from 'react';
import styled from 'styled-components/native';
import { Partner } from '../../interfaces/partner';
import { ColorsPalette } from '../../interfaces/styled';
import { Card, Typo } from '../ui';

type Props = {
  item: Partner;
  colors: ColorsPalette;
};

const TextContainer = styled.View<{ marginTop?: number }>`
  margin-top: ${(p) => p.marginTop ?? 0}px;
  align-items: center;
  flex-direction: row;
`;

const PartenerCard = memo(({ item, colors }: Props) => {
  return (
    <Card>
      <TextContainer>
        <Typo isBold color={colors.primary_shadow}>
          {item.name}
        </Typo>
      </TextContainer>
      <TextContainer marginTop={12}>
        <Typo>{item.comments}</Typo>
      </TextContainer>
      <TextContainer marginTop={24}>
        <Typo>URL: </Typo>
        <Typo color={colors.gray}>{item.url}</Typo>
      </TextContainer>
    </Card>
  );
});

export default PartenerCard;
