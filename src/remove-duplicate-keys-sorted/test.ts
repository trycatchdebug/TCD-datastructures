import removeDuplicates from './removeDuplicates';

describe('twoSum', () => {
  it('returns 0, if nums is empty', () => {
    expect(removeDuplicates([])).toEqual(0);
  });

  it('returns 1, if one element', () => {
    expect(removeDuplicates([1])).toEqual(1);
  });

  it('returns 1, if nums size is 1', () => {
    expect(removeDuplicates([1])).toEqual(1);
  });

  it('returns 1, if all elements are same', () => {
    expect(removeDuplicates([3, 3, 3])).toEqual(1);
  });

  it('returns correct value', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);

    expect(
      removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    ).toEqual(5);
  });
});

