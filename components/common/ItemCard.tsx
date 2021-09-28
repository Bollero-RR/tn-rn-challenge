import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Item } from '../../interfaces/item';
import { moneyFormatter } from '../../utils/moneyFormatter';
import { Arrow } from '../icons/Arrow';
import { Typo, Badge, Card } from '../ui';

const DetailsContainer = styled.View`
  padding-bottom: 16px;
`;

const CashContainer = styled.View<{ alignItems?: string; marginRight?: number; paddingBottom?: number }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(p) => p.alignItems ?? 'center'};
  padding-bottom: ${(p) => p.paddingBottom ?? 5}px;

  ${(p) =>
    p.marginRight &&
    css`
      margin-right: ${p.marginRight}px;
    `};
`;

const Row = styled.View<{ justifyContent?: string; flex?: number; marginLeft?: number }>`
  flex-direction: row;
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  align-items: center;
  ${(p) =>
    p.flex &&
    css`
      flex: ${p.flex};
    `};
  ${(p) =>
    p.marginLeft &&
    css`
      margin-left: ${p.marginLeft}px;
    `};
`;

type Props = {
  handlePress?: () => void;
  item?: Item;
  showDetails?: boolean;
};

const ItemCard = memo(({ item, handlePress, showDetails = false }: Props) => {
  const formatedPrice = moneyFormatter(parseFloat(item.priceUsd));
  const formatedChangePercent = parseFloat(item.changePercent24Hr);

  const details = [
    {
      label: 'Supply',
      value: moneyFormatter(parseFloat(item.priceUsd), 'US$'),
    },
    {
      label: 'Max Supply',
      value: moneyFormatter(parseFloat(item.priceUsd), 'US$'),
    },
    {
      label: 'Market Cap',
      value: moneyFormatter(parseFloat(item.priceUsd)),
    },
  ];

  return (
    <Card>
      <TouchableOpacity onPress={handlePress} disabled={!handlePress}>
        <CashContainer marginRight={6}>
          <Row>
            <Typo isBold>{item.symbol}</Typo>
            <Typo> - </Typo>
            <Typo>{item.name}</Typo>
          </Row>
          <Typo color="#6B7280">#{item.rank}</Typo>
        </CashContainer>
        <CashContainer alignItems="flex-end" paddingBottom={16}>
          <Typo isBold color="#019FB5" sizePx={24}>
            {formatedPrice}
          </Typo>
          <Row flex={1} justifyContent="space-between" marginLeft={6}>
            <Typo color="#6B7280" sizePx={14}>
              USD
            </Typo>
            <Badge type={formatedChangePercent >= 0 ? 'success' : 'error'}>
              <Arrow
                color={formatedChangePercent >= 0 ? '#10B981' : '#F33A3A'}
                direction={formatedChangePercent >= 0 ? 'top' : 'bottom'}
              />
              <Typo isBold sizePx={14} color={formatedChangePercent >= 0 ? '#065F46' : '#A50606'}>
                {Math.abs(formatedChangePercent).toFixed(1)}%
              </Typo>
            </Badge>
          </Row>
        </CashContainer>
      </TouchableOpacity>
      {showDetails && (
        <DetailsContainer>
          {React.Children.toArray(
            details.map((detail) => (
              <Row justifyContent="flex-start">
                <Typo marginLeft={8}>{detail.label}</Typo>
                <Typo marginLeft={8}>{detail.value}</Typo>
                {detail.label === 'Market Cap' && (
                  <Typo marginLeft={8} color="#6B7280" sizePx={14}>
                    USD
                  </Typo>
                )}
              </Row>
            ))
          )}
        </DetailsContainer>
      )}
    </Card>
  );
});
export default ItemCard;
