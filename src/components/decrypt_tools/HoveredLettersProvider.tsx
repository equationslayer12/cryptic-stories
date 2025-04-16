import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  HoveredLettersContext,
  HoveredLettersContextType,
} from './lettersContext';
import styles from './HoveredLeterrsProvider.module.scss';
import { isMobile } from 'react-device-detect';

export const HoveredLettersProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [letterMappings, setLetterMappings] = useState<Record<string, string>>(
    {}
  );
  const [hoveredLetter, setHoveredLetter] = useState<string>('');

  const [showMobileInput, setShowMobileInput] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (isMobile && showMobileInput) {
      inputRef.current?.focus();
    }
  }, [showMobileInput]);

  const contextValue: HoveredLettersContextType = {
    hoveredLetter,
    setHoveredLetter,
    letterMappings,
    setLetterMappings,
    showMobileInput,
    setShowMobileInput,
  };

  return (
    <HoveredLettersContext value={contextValue}>
      {children}
      {showMobileInput && (
        <>
          <input
            type='text'
            ref={inputRef}
            className={styles.hiddenInput}
            onBlur={() => setShowMobileInput(false)}
            autoComplete={'off'}
            autoCorrect={'off'}
            autoCapitalize={'off'}
          />
        </>
      )}
    </HoveredLettersContext>
  );
};
