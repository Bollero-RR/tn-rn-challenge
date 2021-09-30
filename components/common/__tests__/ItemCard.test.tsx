// __tests__/fetch.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import ItemCard from '../ItemCard';
import { Colors, theme } from '../../../styles/Theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const wrapper = (component: JSX.Element) => <StyledThemeProvider theme={theme}>{component}</StyledThemeProvider>;

test('Max supply handles correctly null value', async () => {
  const itemCardProps = {
    item: {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      supply: '18830012.0000000000000000',
      maxSupply: null,
      marketCapUsd: '819421723884.4704459597998016',
      volumeUsd24Hr: '20929680450.3961436889498584',
      priceUsd: '43516.7924420053713168',
      changePercent24Hr: '3.3159658467309826',
      vwap24Hr: '42168.5119583846778395',
      explorer: 'https://blockchain.info/',
    },
    showDetails: true,
    colors: Colors,
  };
  const item = render(wrapper(<ItemCard {...itemCardProps} />));
  expect(item).toBeDefined();
  const maxSupplyLabel = item.getByTestId('Max Supply - testid');
  expect(maxSupplyLabel).toHaveTextContent('-');
});
