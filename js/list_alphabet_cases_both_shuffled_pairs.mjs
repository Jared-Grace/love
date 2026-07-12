import { list_chunk } from "./list_chunk.mjs";
import { list_alphabet_cases_both_shuffled } from "./list_alphabet_cases_both_shuffled.mjs";
export function list_alphabet_cases_both_shuffled_pairs() {
  let letters = list_alphabet_cases_both_shuffled();
  let pairs = list_chunk(letters, 2);
  return pairs;
}
