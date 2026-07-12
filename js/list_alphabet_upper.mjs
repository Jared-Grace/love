import { text_alphabet_upper } from "./text_alphabet_upper.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function list_alphabet_upper() {
  let alphabet_lower_unsplit = text_alphabet_upper();
  let alphabet_lower = text_split_empty(alphabet_lower_unsplit);
  return alphabet_lower;
}
