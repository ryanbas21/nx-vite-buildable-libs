import { isEven } from '@pulecka/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
