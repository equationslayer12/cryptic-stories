import { useHoveredLetters } from './lettersContext';
import styles from './Letter.module.scss';
import cx from 'classnames';

type Props = {
  letter: string;
};

export function Letter({ letter }: Props) {
  // @ts-expect-error: todo
  const { hoveredLetter, setHoveredLetter, letterMappings, setLetterMappings } =
    useHoveredLetters();
  const isHovered = hoveredLetter === letter;
  return (
    <span
      className={cx({ [styles.hovered]: isHovered })}
      onMouseEnter={() => {
        setHoveredLetter(letter);
      }}
      onMouseLeave={() => {
        setHoveredLetter('');
      }}
    >
      {letter}
    </span>
  );
}
