import { useHoveredLetters } from './lettersContext';
import styles from './Letter.module.scss';
import cx from 'classnames';
import { useRef } from 'react';

type Props = {
  letter: string;
};

export function Letter({ letter }: Props) {
  const {
    hoveredLetter,
    setHoveredLetter,
    letterMappings,
    setShowMobileInput,
  } = useHoveredLetters();
  const isHovered = hoveredLetter === letter;

  const timerRef = useRef<number | null>(null);
  const longPressTriggeredRef = useRef(false);

  const handleTouchStart = () => {
    longPressTriggeredRef.current = false;
    timerRef.current = window.setTimeout(() => {
      longPressTriggeredRef.current = true;
    }, 300);
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setHoveredLetter(letter);

    if (longPressTriggeredRef.current) {
      console.log('long tap');
      setShowMobileInput(true);
    } else console.log('short tap');
  };

  return (
    <>
      {/* <span
        className={cx({ [styles.hovered]: isHovered })}
        onMouseEnter={() => {
          setHoveredLetter(letter);
        }}
        onMouseLeave={() => {
          setHoveredLetter('');
        }}
      >
        {letterMappings[letter] || letter}
      </span> */}
      <span
        className={cx(styles.letter, { [styles.hovered]: isHovered })}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {letterMappings[letter] || letter}
      </span>
    </>
  );
}
