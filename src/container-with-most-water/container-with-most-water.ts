/**
 * ex :-
 * [] => 0
 * [1] => 0
 * [[1, 8, 6, 2, 5, 4, 8, 3, 7]] => 49
 *
 * @param height
 * @returns number
 */

function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;

  while (i < j) {
    // O(n) | O(1)
    const area = (j - i) * Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

export default maxArea;

/**
 *   let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    // O(n)
    for (let j = i + 1; j < height.length; j++) {
      // O(n)
      const area = (j - i) * Math.min(height[i], height[j]);
      maxArea = Math.max(maxArea, area);
    }
  } // O(n2)

  return maxArea;
 */

