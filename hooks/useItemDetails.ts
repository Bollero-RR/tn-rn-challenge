import { useQuery } from 'react-query';
import { axios } from '../config/api';
import { Item } from '../interfaces/item';
import { API_ROUTES, RQ_KEYS } from '../utils/api';

const getDetails = async (id?: string) => {
  try {
    const response = await axios.get(`${API_ROUTES.itemDetails}${id}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message); // Forward on the error.
  }
};

export const useItemDetails = (id?: string) => {
  return useQuery<Item, Error>([RQ_KEYS.items, id], () => getDetails(id), {
    enabled: !!id,
  });
};
