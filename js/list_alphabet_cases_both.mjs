import { text_alphabet_cases_both } from "./text_alphabet_cases_both.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function list_alphabet_cases_both() {
  let alphabet_lower_unsplit = text_alphabet_cases_both();
  let alphabet_lower = text_split_empty(alphabet_lower_unsplit);
  return alphabet_lower;
}
