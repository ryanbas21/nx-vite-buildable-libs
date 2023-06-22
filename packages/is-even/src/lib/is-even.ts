export function isEven(x: number): boolean {
  return x % 2 === 0;
}
export type IsEven = ReturnType<typeof isEven>;
