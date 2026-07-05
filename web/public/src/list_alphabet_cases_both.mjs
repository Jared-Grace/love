import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_alphabet_lower } from "../../../love/public/src/text_alphabet_lower.mjs";
export function list_alphabet_cases_both() {
  let alphabet_lower_unsplit = text_alphabet_lower();
  let alphabet_lower = text_split_empty(alphabet_lower_unsplit);
  return alphabet_lower;
}
