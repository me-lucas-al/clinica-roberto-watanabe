import { createContext, useContext } from "react";

export const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeProviderContext);
}