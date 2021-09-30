import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User } from '../interfaces/user';
import { getUser, saveUser } from '../utils/secureStorage';

export interface ProviderInterface {
  user: User;
  handleUser: (value: User) => void;
}

export const AppStateContext = createContext<any>(undefined);

type Props = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>();

  const handleUser = async (value: User) => {
    setUser(value);
    saveUser(value);
  };

  useEffect(() => {
    // To.Do continue working on persisting session token
    (async () => {
      const currentUser = await getUser();
      if (currentUser) {
        setUser(currentUser);
      }
    })();
  }, []);

  return <AppStateContext.Provider value={{ user, handleUser }}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): ProviderInterface => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('You must wrap your application with <AppStateProvider /> in order to useAppState().');
  }

  return context;
};
