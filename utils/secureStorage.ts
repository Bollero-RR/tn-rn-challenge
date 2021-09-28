import * as SecureStore from 'expo-secure-store';

const KEYS = {
  user: 'user',
};

// To.Do in order to detect native errors I would addd a crash analitics sdk.

export const saveUser = async (value: any) => {
  try {
    await SecureStore.setItemAsync(KEYS.user, JSON.stringify(value));
  } catch (error) {
    console.log('saveUser - error -->', error);
  }
};

export const getUser = async () => {
  try {
    const result = await SecureStore.getItemAsync(KEYS.user);
    return result ? JSON.parse(result) : null;
  } catch (error) {
    console.log('getUser - error -->', error);
  }
};
