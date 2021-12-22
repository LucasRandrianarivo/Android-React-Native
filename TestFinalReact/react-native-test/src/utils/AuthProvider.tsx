import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, createContext, useContext} from 'react';
import URLS from '../resources/url';

const AuthContext = createContext({});

interface AuthProviderProps {
  children: any;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [jwt, setJwt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const login = () => {};

  const logout = () => {
    setLoading(true);
    setJwt(null);
    AsyncStorage.removeItem('jwt').then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem('jwt').then(value => {
      setLoading(false);
      if (value !== null) {
        setJwt(value);
      }
      //   refreshUser();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        jwt,
        login,
        logout,
        // refreshUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext) as {
    user: any;
    jwt?: string;
    login: any;
    logout: any;
    refreshUser: any;
  };
