import React from 'react';
import { Colors } from '../../styles/Theme';
import { Arrow } from '../icons';
import { Badge, Typo } from '../ui';

type Props = {
  type: 'success' | 'error' | 'info';
  percent: number;
};

type BadgeCommonStyle = {
  arrowColor: string;
  arrowDirection: 'top' | 'bottom';
  textColor: string;
};

type BadgeStylesOptions = { [k: string]: BadgeCommonStyle };

const handleBadgeStyles: BadgeStylesOptions = {
  success: {
    arrowColor: Colors.green,
    arrowDirection: 'top',
    textColor: Colors.green_bold,
  },
  error: {
    arrowColor: Colors.red,
    arrowDirection: 'bottom',
    textColor: Colors.red_bold,
  },
  info: {
    arrowColor: Colors.gray,
    arrowDirection: 'top',
    textColor: Colors.light_gray,
  },
};

const ItemBadge = ({ type, percent }: Props) => {
  return (
    <Badge type={type}>
      {type !== 'info' ? (
        <Arrow color={handleBadgeStyles[type].arrowColor} direction={handleBadgeStyles[type].arrowDirection} />
      ) : (
        <Typo isBold sizePx={14} color={handleBadgeStyles[type].arrowColor}>
          -
        </Typo>
      )}
      <Typo isBold sizePx={14} color={handleBadgeStyles[type].textColor}>
        {Math.abs(percent).toFixed(1)}%
      </Typo>
    </Badge>
  );
};

export default ItemBadge;
