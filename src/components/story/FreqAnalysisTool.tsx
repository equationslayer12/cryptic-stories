import { HoveredLettersProvider } from '../decrypt_tools/HoveredLettersProvider';
import { Letter } from '../decrypt_tools/Letter';

type Props = {
  text: string;
};

export function FreqAnalysisTool({ text }: Props) {
  return (
    <div>
      <HoveredLettersProvider>
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='b' />
        <Letter letter='b' />
        <Letter letter='b' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='c' />
        <Letter letter='c' />
        <Letter letter='c' />
      </HoveredLettersProvider>
      <br />
      <HoveredLettersProvider>
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='b' />
        <Letter letter='b' />
        <Letter letter='b' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='a' />
        <Letter letter='c' />
        <Letter letter='c' />
        <Letter letter='c' />
      </HoveredLettersProvider>
    </div>
  );
}
