import { equal } from "./equal.mjs";
export async function sandbox() {
  let left = 1;
  left = 1;
  let right = 2;
  if (equal(left, right)) {
  }
}
