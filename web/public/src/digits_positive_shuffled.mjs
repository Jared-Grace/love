import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
export function digits_positive_shuffled() {
  let dps = digits_positive();
  list_shuffle(dps);
  return dps;
}
