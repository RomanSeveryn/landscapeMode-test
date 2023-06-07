import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type MainContextType = {
  isChangePosition: boolean;
  setIsChangePosition: Dispatch<SetStateAction<boolean>>;
};

type MainProviderType = {
  children: React.ReactNode;
};

const MainContext = createContext<MainContextType>(null);

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainProvider = ({ children }: MainProviderType) => {
  const [isChangePosition, setIsChangePosition] = useState(false);

  return (
    <MainContext.Provider value={{ isChangePosition, setIsChangePosition }}>
      {children}
    </MainContext.Provider>
  );
};
