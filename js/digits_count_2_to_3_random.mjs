import { list_shuffle } from "./list_shuffle.mjs";
import { digits_count_2_to_3 } from "./digits_count_2_to_3.mjs";
export function digits_count_2_to_3_random() {
  let mapped = digits_count_2_to_3();
  list_shuffle(mapped);
  return mapped;
}
