import React from 'react';
import { FlatList } from 'react-native';
import { useNavigationHooks } from '../hooks/useNavigationHooks';
import { useItems } from '../hooks/useItems';
import { ItemCard, LoadingIndicator, ErrorStateView, EmptyState } from '../components/common';
import { ScreenContainer } from '../components/ui';
import { useTheme } from 'styled-components';

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
const ITEM_HEIGHT = 100; // value extracted from figma

export default function ListScreen() {
  const { navigateToDetailScreen } = useNavigationHooks();
  const { data: items, isLoading, isError, refetch } = useItems();
  const { colors } = useTheme();

  if (isLoading) return <LoadingIndicator />;

  if (isError) return <ErrorStateView />;

  return (
    <ScreenContainer>
      <FlatList
        onRefresh={refetch}
        refreshing={isLoading}
        data={items}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyState}
        renderItem={({ item }) => (
          <ItemCard item={item} colors={colors} handlePress={() => navigateToDetailScreen(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
      />
    </ScreenContainer>
  );
}
