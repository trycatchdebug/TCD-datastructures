/** **
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * Constraints:
 * Return [-1, -1] if no target found
 * Return any pair if multiple targets found
 * Examples:
 *  twoSum([], 3)               : [-1, -1]
 *  twoSum([1], 1)              : [-1, -1]
 *  twoSum([3, 4, 2], 5)        : [0, 2]
 *  twoSum([8, 2, -2, 4, 3], 7) : [3, 4]
 */

const twoSum = (
  nums: number[],
  target: number
): number[] => {
  // handle constraints
  if (nums.length < 2) {
    return [-1, -1];
  }

  // search for result pair and return
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      return [i, hashMap.get(nums[i])];
    }

    hashMap.set(target - nums[i], i);
  } // time complexity: O(n) ; space complexity: O(n)

  return [-1, -1];
};

export default twoSum;

/** O(n2)
  if (nums.length < 2) {
    return [-1, -1];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
 */

