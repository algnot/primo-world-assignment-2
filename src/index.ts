import { merge } from "./merge.js";

const collection_1 = [9, 7, 4, 1];
const collection_2 = [0, 2, 5, 8];
const collection_3 = [3, 6, 10];

const result = merge(collection_1, collection_2, collection_3);

console.log("collection_1 (max → min):", collection_1);
console.log("collection_2 (min → max):", collection_2);
console.log("collection_3 (min → max):", collection_3);
console.log("merged (min → max):      ", result);
