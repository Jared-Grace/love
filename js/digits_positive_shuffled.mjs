import { list_shuffle } from "./list_shuffle.mjs";
import { digits_positive } from "./digits_positive.mjs";
export function digits_positive_shuffled() {
  let dps = digits_positive();
  list_shuffle(dps);
  return dps;
}
