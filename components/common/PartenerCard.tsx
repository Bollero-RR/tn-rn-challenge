import React from 'react';
import styled from 'styled-components/native';
import { Partner } from '../../interfaces/partner';
import { Card, Typo } from '../ui';

type Props = {
  item: Partner;
};

const TextContainer = styled.View<{ marginTop?: number }>`
  margin-top: ${(p) => p.marginTop ?? 0}px;
  align-items: center;
  flex-direction: row;
`;

const PartenerCard = ({ item }: Props) => {
  return (
    <Card>
      <TextContainer>
        <Typo isBold color="#019FB5">
          {item.name}
        </Typo>
      </TextContainer>
      <TextContainer marginTop={12}>
        <Typo>{item.comments}</Typo>
      </TextContainer>
      <TextContainer marginTop={24}>
        <Typo>URL: </Typo>
        <Typo color="#6B7280">{item.url}</Typo>
      </TextContainer>
    </Card>
  );
};

export default PartenerCard;
