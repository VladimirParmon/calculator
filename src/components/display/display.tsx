import { StyledHeading } from './components';

export function DisplayComponent({ input }: { input: string }) {
  return <StyledHeading>{input === '' ? '0' : input}</StyledHeading>;
}
