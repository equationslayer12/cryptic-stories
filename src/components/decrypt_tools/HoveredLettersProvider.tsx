import React, { useEffect, useState, useCallback } from 'react';
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

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (!hoveredLetter) return;

      let newLetter = '';
      if (event.key === 'Backspace') {
        newLetter = '';
      } else if (event.key.length === 1 && event.key !== ' ') {
        newLetter = event.key.toLowerCase();
      } else {
        return;
      }

      setLetterMappings((prev) => ({
        ...prev,
        [hoveredLetter]: newLetter,
      }));
    },
    [hoveredLetter]
  );

  useEffect(() => {
    if (!hoveredLetter) return;
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [hoveredLetter, handleKeyUp]);

  const contextValue: HoveredLettersContextType = {
    hoveredLetter,
    setHoveredLetter,
    letterMappings,
    setLetterMappings,
  };

  return (
    <HoveredLettersContext value={contextValue}>
      {children}
    </HoveredLettersContext>
  );
};
