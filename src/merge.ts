/**
 * Merges three pre-sorted integer collections into one array sorted ascending.
 *
 * Preconditions:
 * - `collection_1` is sorted max → min
 * - `collection_2` is sorted min → max
 * - `collection_3` is sorted min → max
 *
 * Does not call any sort function. Uses a 3-way merge:
 * `collection_1` is read from the end (its smallest value first) so all three
 * streams are consumed in ascending order.
 */
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {
  const result: number[] = [];

  let i = collection_1.length - 1;
  let j = 0;
  let k = 0;

  while (i >= 0 || j < collection_2.length || k < collection_3.length) {
    const has1 = i >= 0;
    const has2 = j < collection_2.length;
    const has3 = k < collection_3.length;

    const v1 = has1 ? collection_1[i] : undefined;
    const v2 = has2 ? collection_2[j] : undefined;
    const v3 = has3 ? collection_3[k] : undefined;

    const next = minDefined(v1, v2, v3);

    if (has1 && v1 === next) {
      result.push(v1);
      i -= 1;
    } else if (has2 && v2 === next) {
      result.push(v2);
      j += 1;
    } else if (has3 && v3 === next) {
      result.push(v3);
      k += 1;
    }
  }

  return result;
}

function minDefined(
  a: number | undefined,
  b: number | undefined,
  c: number | undefined,
): number {
  let min: number | undefined;

  if (a !== undefined) {
    min = a;
  }
  if (b !== undefined && (min === undefined || b < min)) {
    min = b;
  }
  if (c !== undefined && (min === undefined || c < min)) {
    min = c;
  }

  if (min === undefined) {
    throw new Error("merge: expected at least one remaining value");
  }

  return min;
}
