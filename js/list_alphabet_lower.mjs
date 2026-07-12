import { text_split_empty } from "./text_split_empty.mjs";
import { text_alphabet_lower } from "./text_alphabet_lower.mjs";
export function list_alphabet_lower() {
  let alphabet_lower_unsplit = text_alphabet_lower();
  let alphabet_lower = text_split_empty(alphabet_lower_unsplit);
  return alphabet_lower;
}
