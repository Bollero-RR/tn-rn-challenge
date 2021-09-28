import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from './screens/ToDoScreen';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import { NAVIGATOR } from './utils/navigation';
import Logo from './components/ui/Logo';
import { AppStateProvider } from './providers/useAppState';
import { ThemeContextProvider } from './providers/useTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import DetailScreen from './screens/DetailScreen';
import { HeaderBackButton } from './components/common';
import WalletTabs from './screens/WalletScreen';

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <AppStateProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={NAVIGATOR.Home}>
              <Stack.Screen name={NAVIGATOR.Home} component={HomeScreen} options={{ headerTitle: () => <Logo /> }} />
              <Stack.Screen
                options={{
                  headerLeft: HeaderBackButton,
                }}
                name={NAVIGATOR.ToDo}
                component={ToDoScreen}
              />
              <Stack.Screen
                options={{
                  headerLeft: HeaderBackButton,
                }}
                name={NAVIGATOR.List}
                component={ListScreen}
              />
              <Stack.Screen
                options={{
                  headerLeft: HeaderBackButton,
                }}
                name={NAVIGATOR.Detail}
                component={DetailScreen}
              />
              <Stack.Screen
                options={{
                  headerLeft: HeaderBackButton,
                }}
                name={NAVIGATOR.Wallet}
                component={WalletTabs}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </AppStateProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
