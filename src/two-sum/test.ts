import twoSum from './two-sum';

describe('twoSum', () => {
  it('returns [-1, -1], if nums is empty', () => {
    expect(twoSum([], 9)).toEqual([-1, -1]);
  });

  it('returns [-1, -1], if nums size is 1', () => {
    expect(twoSum([1], 1)).toEqual([-1, -1]);
  });

  it('returns [-1, -1], if target not found', () => {
    expect(twoSum([3, 4, 2], 9)).toEqual([-1, -1]);
  });

  it('returns correct indices with one valid result', () => {
    expect(twoSum([3, 4, 2], 6).sort()).toEqual(
      [1, 2].sort()
    );
  });

  it('returns first pair of indices with multiple valid result', () => {
    console.log(twoSum([3, 4, 2, 5, 1], 6));
    expect(twoSum([3, 4, 2, 5, 1], 6).sort()).toEqual(
      [1, 2].sort()
    );
  });

  it('returns correct indices nums containing negative numbers', () => {
    expect(twoSum([8, 2, -2, 4, 3], 7).sort()).toEqual(
      [3, 4].sort()
    );
  });
});

