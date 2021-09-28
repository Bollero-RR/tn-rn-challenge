import React, { memo } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigationHooks } from '../hooks/useNavigationHooks';
import { useItems } from '../hooks/useItems';
import { ItemCard, LoadingIndicator, ErrorStateView } from '../components/common';
import { SafeAreaView, ScreenContainer } from '../components/ui';
/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets
 * API Example: https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen() {
  const { navigateToDetailScreen } = useNavigationHooks();
  const { data: items, isLoading, isError } = useItems();

  if (isLoading) return <LoadingIndicator />;

  if (isError) return <ErrorStateView />;

  //To.Do implement FlatList instead of ScrollView for showing ScrollView.

  return (
    <ScreenContainer>
      <ScrollView>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} handlePress={() => navigateToDetailScreen(item.id)} />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
