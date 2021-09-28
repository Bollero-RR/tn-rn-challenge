import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomesStackParamList = {
  Detail: {
    id: string;
  };
};

/* Detail */
export type DetailScreenRouteProp = RouteProp<HomesStackParamList, 'Detail'>;

type DetailScreenNavigationProp = StackNavigationProp<HomesStackParamList, 'Detail'>;

export type DetailScreenProps = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};
