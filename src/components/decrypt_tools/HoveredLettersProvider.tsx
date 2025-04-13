import React, { useEffect, useState } from 'react';
import {
  HoveredLettersContext,
  HoveredLettersContextType,
} from './lettersContext';

export const HoveredLettersProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [letterMappings, setLetterMappings] = useState<Record<string, string>>(
    {}
  );
  const [hoveredLetter, setHoveredLetter] = useState<string>('');

  const value: HoveredLettersContextType = {
    hoveredLetter,
    setHoveredLetter,
    letterMappings,
    setLetterMappings,
  };

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      let newLetter = '';
      if (event.key === 'Backspace') {
        newLetter = '';
      } else if (event.key.length === 1) {
        newLetter = event.key.toLowerCase();
      }
      if (newLetter === ' ') {
        return;
      }

      setLetterMappings({ ...letterMappings, [hoveredLetter]: newLetter });
    };

    if (hoveredLetter) {
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [hoveredLetter, letterMappings]);

  return (
    <HoveredLettersContext value={value}>{children}</HoveredLettersContext>
  );
};
