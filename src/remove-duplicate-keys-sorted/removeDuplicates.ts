/** Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */

/**
 *[1, 1, 2] -> 2; nums = [1, 2, _]
 *[0, 0, 1, 1, 1, 2, 2, 3, 3, 4] -> 5; nums = [0, 1, 2, 3, 4,_,_,_,_,_]
 * @param nums
 */

function swapElements(
  nums: number[],
  i: number,
  j: number
): void {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      swapElements(nums, i + 1, j);
      i++;
      j++;
    }
  }

  return i + 1;
}

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

export default removeDuplicates;

/**
 *   const uniqueNums = [];
  let temp = nums[0];
  uniqueNums.push(temp);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== temp) {
      uniqueNums.push(nums[i]);
      temp = nums[i];
    }
  }

  console.log(uniqueNums);
 */

