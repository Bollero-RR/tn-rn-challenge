import React from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { PartnerListHeader, PartenerCard } from '../components/common';
import { EmptyState } from '../components/common';
import { ScreenContainer } from '../components/ui';

// As data is not from an api, I would have added aloading indicator
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
      />
    </ScreenContainer>
  );
};

export default PartnersSection;
