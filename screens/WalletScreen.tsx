import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTab } from '../components/common';
import { NAVIGATOR } from '../utils/navigation';
import AccountScreen from './AccountSection';
import PartnerScreen from './PartnersSection';

/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */

const BottomTab = createBottomTabNavigator();

const WalletTabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={NAVIGATOR.WalletTabs.Account}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => <CustomTab text="Account" isFocused={focused} />,
        }}
        name={NAVIGATOR.WalletTabs.Account}
        component={AccountScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: 'Partners',
          tabBarIcon: ({ focused }) => <CustomTab text="Partners" isFocused={focused} />,
        }}
        name={NAVIGATOR.WalletTabs.Partners}
        component={PartnerScreen}
      />
    </BottomTab.Navigator>
  );
};

export default WalletTabs;
