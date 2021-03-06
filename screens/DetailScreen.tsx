import React from 'react';
import { useNavigationHooks } from '../hooks/useNavigationHooks';
import { DetailScreenProps } from '../interfaces/navigation';
import { useItemDetails } from '../hooks/useItemDetails';
import { Button, ScreenContainer } from '../components/ui';
import { ErrorStateView, ItemCard, LoadingIndicator } from '../components/common';
import { useTheme } from 'styled-components/native';

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

export default function ListScreen({ route }: DetailScreenProps) {
  const id = route.params.id;

  const { navigateToWalletScreen } = useNavigationHooks();
  const { data: item, isLoading, isError } = useItemDetails(id);
  const { colors } = useTheme();

  if (isLoading) return <LoadingIndicator />;

  if (isError) return <ErrorStateView />;

  return (
    <ScreenContainer>
      {item && <ItemCard item={item} showDetails colors={colors} />}
      <Button
        text="My Wallet"
        accessibilityLabel="Go to My Wallet button"
        accessibilityHint="Navigates to My Wallet Screen"
        handlePress={navigateToWalletScreen}
      />
    </ScreenContainer>
  );
}
