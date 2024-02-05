"use client"

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Création du type pour les données globales
type GlobalStateType = {
  name: string;
  isLoggedIn: boolean;
};

const defaultValue: GlobalStateType = {
  name: "",
  isLoggedIn: false,
};

// création du contexte
const AppContext = createContext<{
  globalState: GlobalStateType;
  setGlobalState: Dispatch<SetStateAction<GlobalStateType>>;
}>({
  globalState: defaultValue,
  setGlobalState: () => null,
});

// ici  le wrapper
export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [globalState, setGlobalState] = useState<GlobalStateType>(defaultValue);
  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useAppContext() {
  // Utilisation du hook useContext pour accéder au contexte
  // et retourner les valeurs nécessaires
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}


