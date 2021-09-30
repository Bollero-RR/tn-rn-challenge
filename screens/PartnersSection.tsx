import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { PartnerListHeader, PartenerCard } from '../components/common';
import { EmptyState } from '../components/common';
import { ScreenContainer } from '../components/ui';

// As data is not from an api, I would have added aloading indicator.
// App description is short so we can talk about them at the interview.
const partnerList = [
  { name: 'Inmediata', url: '#', comments: 'Survey application, data display managment' },
  {
    name: 'MakeSense',
    url: '#',
    comments: 'Encrypted React Native chat app, with crypto currency involved and channel moderation',
  },
  { name: 'Uplinq', url: '#', comments: 'SMB financial managment dashboard and FI reports section ' },
  { name: 'Space Prision', url: '#', comments: 'Operator dashboard for a VR game at Parque de la Costa. ' },
];

const ITEM_HEIGHT = 167; // value extracted from figma

const PartnersSection = () => {
  const { colors } = useTheme();
  return (
    <ScreenContainer>
      <FlatList
        ListHeaderComponent={PartnerListHeader}
        data={partnerList}
        renderItem={({ item }) => <PartenerCard item={item} colors={colors} />}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={EmptyState}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
      />
    </ScreenContainer>
  );
};

export default PartnersSection;
