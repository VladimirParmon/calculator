import { StyledHeading } from './components';

export function DisplayComponent({ input }: { input: string }) {
  return <StyledHeading data-cy="display">{input === '' ? '0' : input}</StyledHeading>;
}
