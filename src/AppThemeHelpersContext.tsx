import { createContext } from "react";

export interface AppThemeHelperContextType {
  /**
   * @description Helper function to toggle theme
   * @returns void
   */
  toggleThemeMode: () => void;
}

export const AppThemeHelperContext = createContext<AppThemeHelperContextType>({
  toggleThemeMode: () => {},
});
