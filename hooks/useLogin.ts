import { useMutation } from 'react-query';
import { User } from '../interfaces/user';
import { RQ_KEYS } from '../utils/api';

type Request = {
  username: string;
  password: string;
};

// A mock function to mimic making an async request for data
const login = async (request: Request) => {
  const response = await new Promise<{ data: User }>((resolve) =>
    setTimeout(() => resolve({ data: request as User }), 500)
  );
  return response.data;
};

export const useLogin = () => {
  return useMutation<User, Error, Request>((request: Request) => login(request), {
    mutationKey: RQ_KEYS.login,
  });
};
