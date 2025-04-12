import React, { useState } from 'react';
import {
  HoveredLettersContext,
  HoveredLettersContextType,
} from './lettersContext';

export const HoveredLettersProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [letterMappings, setLetterMappings] = useState<Record<string, boolean>>(
    {}
  );
  const [hoveredLetter, setHoveredLetter] = useState<string>('');

  const value: HoveredLettersContextType = {
    hoveredLetter,
    setHoveredLetter,
    letterMappings,
    setLetterMappings,
  };

  return (
    <HoveredLettersContext value={value}>{children}</HoveredLettersContext>
  );
};
