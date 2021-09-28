import React from 'react';
import { FlatList } from 'react-native';
import { PartnerListHeader, PartenerCard } from '../components/common';
import { ScreenContainer } from '../components/ui';

// As data is not from an api, I would have added an empty state component and loading indicator
const partnerList = [
  { name: 'App1', url: '#', comments: 'Description of the application and what you did.' },
  { name: 'App2', url: '#', comments: 'Description of the application and what you did.' },
  { name: 'App3', url: '#', comments: 'Description of the application and what you did.' },
];

const PartnersSection = () => {
  return (
    <ScreenContainer>
      <FlatList
        ListHeaderComponent={PartnerListHeader}
        data={partnerList}
        renderItem={PartenerCard}
        keyExtractor={(item) => item.name}
      />
    </ScreenContainer>
  );
};

export default PartnersSection;
