import { describe, expect, it } from "vitest";
import { merge } from "./merge.js";

describe("merge", () => {
  it("merges three non-empty collections into ascending order", () => {
    const collection_1 = [9, 7, 4, 1];
    const collection_2 = [0, 2, 5, 8];
    const collection_3 = [3, 6, 10];

    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("returns an empty array when every collection is empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("returns collection_1 reversed when the others are empty", () => {
    expect(merge([5, 3, 1], [], [])).toEqual([1, 3, 5]);
  });

  it("returns collection_2 unchanged when the others are empty", () => {
    expect(merge([], [1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it("returns collection_3 unchanged when the others are empty", () => {
    expect(merge([], [], [4, 6, 9])).toEqual([4, 6, 9]);
  });

  it("merges when only one collection is empty", () => {
    expect(merge([8, 3], [1, 4], [])).toEqual([1, 3, 4, 8]);
    expect(merge([8, 3], [], [0, 9])).toEqual([0, 3, 8, 9]);
    expect(merge([], [2, 5], [1, 7])).toEqual([1, 2, 5, 7]);
  });

  it("keeps duplicate values in ascending order", () => {
    expect(merge([5, 5, 2], [2, 5], [2, 3, 5])).toEqual([
      2, 2, 2, 3, 5, 5, 5, 5,
    ]);
  });

  it("handles negative numbers and zero", () => {
    expect(merge([0, -2, -8], [-7, -1, 4], [-3, 2])).toEqual([
      -8, -7, -3, -2, -1, 0, 2, 4,
    ]);
  });

  it("handles single-element collections", () => {
    expect(merge([2], [1], [3])).toEqual([1, 2, 3]);
  });

  it("handles collections of different lengths", () => {
    expect(merge([10, 1], [0], [2, 3, 4, 5])).toEqual([0, 1, 2, 3, 4, 5, 10]);
  });

  it("does not mutate the input collections", () => {
    const collection_1 = [4, 2];
    const collection_2 = [1, 5];
    const collection_3 = [0, 3];

    merge(collection_1, collection_2, collection_3);

    expect(collection_1).toEqual([4, 2]);
    expect(collection_2).toEqual([1, 5]);
    expect(collection_3).toEqual([0, 3]);
  });
});
