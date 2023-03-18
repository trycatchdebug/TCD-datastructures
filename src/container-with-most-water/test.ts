import maxArea from './container-with-most-water';

describe('maxArea', () => {
  it('returns 0, if height is empty', () => {
    expect(maxArea([])).toEqual(0);
  });

  it('returns 0, if height size is 1', () => {
    expect(maxArea([1])).toEqual(0);
  });

  it('returns correct value, if all height are same', () => {
    expect(maxArea([8, 8, 8, 8])).toEqual(24);
  });

  it('returns correct value', () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toEqual(17);
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(
      49
    );
  });
});

