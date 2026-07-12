import { list_shuffle } from "./list_shuffle.mjs";
import { list_alphabet_cases_both } from "./list_alphabet_cases_both.mjs";
export function list_alphabet_cases_both_shuffled() {
  let letters = list_alphabet_cases_both();
  list_shuffle(letters);
  return letters;
}
