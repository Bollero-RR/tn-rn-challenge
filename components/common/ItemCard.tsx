import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Item } from '../../interfaces/item';
import { formatter } from '../../utils/moneyFormatter';
import { Typo, Card } from '../ui';
import ItemBadge from './ItemBadge';

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

const Row = styled.View<{ justifyContent?: string; flex?: number; marginLeft?: number; marginTop?: number }>`
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
  ${(p) =>
    p.marginTop &&
    css`
      margin-top: ${p.marginTop}px;
    `};
`;

type Props = {
  handlePress?: () => void;
  item: Item;
  showDetails?: boolean;
  colors: any;
};

const ItemCard = memo(({ item, handlePress, showDetails = false, colors }: Props) => {
  const formatedPrice = formatter(parseFloat(item.priceUsd));
  const formatedChangePercent = parseFloat(item.changePercent24Hr);

  const details = [
    {
      label: 'Supply',
      value: formatter(parseFloat(item.supply)),
    },
    {
      label: 'Max Supply',
      value: item.maxSupply ? formatter(parseFloat(item.maxSupply)) : '-',
    },
    {
      label: 'Market Cap',
      value: formatter(parseFloat(item.marketCapUsd)),
    },
  ];

  // The 'info' case currently is for values that matches 0, for indicating that hasn't change,
  // but it can be updated with business logic, eg: if we want to add a range of values for displaying the gray state.
  // As we are currently displaying only 1 decimal, so small values are not displayed correctly.
  const badgeType = formatedChangePercent === 0 ? 'info' : formatedChangePercent > 0 ? 'success' : 'error';

  return (
    <Card>
      <TouchableOpacity
        accessible={!!handlePress}
        accessibilityLabel="Item Card"
        accessibilityHint={!!handlePress ? 'Navigate to card Details screen' : 'none'}
        onPress={handlePress}
        disabled={!handlePress}
      >
        <CashContainer marginRight={6}>
          <Row>
            <Typo isBold>{item.symbol}</Typo>
            <Typo> - </Typo>
            <Typo>{item.name}</Typo>
          </Row>
          <Typo color={colors.gray}>#{item.rank}</Typo>
        </CashContainer>
        <CashContainer alignItems="flex-end" paddingBottom={16}>
          <Typo isBold color={colors.primary_shadow} sizePx={24}>
            $ {formatedPrice}
          </Typo>
          <Row flex={1} justifyContent="space-between" marginLeft={6}>
            <Typo color={colors.gray} sizePx={14}>
              USD
            </Typo>
            <ItemBadge type={badgeType} percent={formatedChangePercent} />
          </Row>
        </CashContainer>
      </TouchableOpacity>
      {showDetails && (
        <DetailsContainer>
          {React.Children.toArray(
            details.map((detail) => (
              <Row marginTop={10} justifyContent="flex-start">
                {/* I would update the labels with a bold font and ':', as with the current format it gets mixed with the value*/}
                <Typo marginLeft={8}>{detail.label}</Typo>
                {detail.label === 'Market Cap' ? (
                  <>
                    <Typo marginLeft={8}>$ {detail.value}</Typo>
                    <Typo marginLeft={8} color={colors.gray} sizePx={14}>
                      USD
                    </Typo>
                  </>
                ) : (
                  <Typo marginLeft={8}>{detail.value}</Typo>
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
