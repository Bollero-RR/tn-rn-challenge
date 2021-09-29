import { useQuery } from 'react-query';
import { axios } from '../config/api';
import { Item } from '../interfaces/item';
import { API_ROUTES, RQ_KEYS } from '../utils/api';

const getItems = async () => {
  try {
    const response = await axios.get(API_ROUTES.items);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message); // Forward on the error.
  }
};

export const useItems = () => {
  return useQuery<Item[], Error>([RQ_KEYS.items], getItems, {
    staleTime: 1000 * 60 * 5,
  });
};
