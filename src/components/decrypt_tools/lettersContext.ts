import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface HoveredLettersContextType {
  hoveredLetter: string;
  setHoveredLetter: Dispatch<SetStateAction<string>>;
  letterMappings: Record<string, string>;
  setLetterMappings: Dispatch<SetStateAction<Record<string, string>>>;
}

export const HoveredLettersContext = createContext<
  HoveredLettersContextType | undefined
>(undefined);

export const useHoveredLetters = () => {
  const context = useContext(HoveredLettersContext);
  if (!context) {
    throw new Error(
      'useHoveredLetters must be used within a HoveredLettersProvider (Letter outside of HoveredLettersProvider)'
    );
  }
  return context;
};
