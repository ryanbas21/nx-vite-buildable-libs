import { isEven } from './is-even';

describe('isEven', () => {
  it('should work', () => {
    expect(isEven(0)).toEqual(true);
    expect(isEven(1)).toEqual(false);
    expect(isEven(2)).toEqual(true);
    expect(isEven(3)).toEqual(false);
  });
});
