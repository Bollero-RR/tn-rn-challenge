import { useNavigation } from '@react-navigation/native';
import { NAVIGATOR } from '../utils/navigation';

export const useNavigationHooks = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const navigateToToDoScreen = () => navigation.navigate(NAVIGATOR.ToDo);

  const navigateToListScreen = () => navigation.navigate(NAVIGATOR.List);

  const navigateToDetailScreen = (id: string) => navigation.navigate(NAVIGATOR.Detail, { id });

  const navigateToWalletScreen = () => navigation.navigate(NAVIGATOR.Wallet);

  const navigateToHomeScreen = () => navigation.navigate(NAVIGATOR.Home);

  return {
    goBack,
    navigateToToDoScreen,
    navigateToListScreen,
    navigateToDetailScreen,
    navigateToWalletScreen,
    navigateToHomeScreen,
  };
};
