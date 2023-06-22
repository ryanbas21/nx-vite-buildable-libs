import { isEven } from '@shared/is-even';
import type { IsEven } from '@shared/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}

export function isOddAndEven(x: number): IsEven {
  return isOdd(x) && isEven(x);
}
