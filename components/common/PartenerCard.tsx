import React from 'react';
import { View } from 'react-native';
import { Partner } from '../../interfaces/partner';
import { Card, Typo } from '../ui';

type Props = {
  item: Partner;
};

const PartenerCard = ({ item }: Props) => {
  return (
    <Card>
      <View style={{ flex: 1 }}>
        <Typo>{item.name}</Typo>
      </View>
      <View style={{ flex: 1 }}>
        <Typo>{item.comments}</Typo>
      </View>
      <View style={{ flex: 1 }}>
        <Typo>URL: {item.url}</Typo>
      </View>
    </Card>
  );
};

export default PartenerCard;
