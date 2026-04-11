import { text_to } from "../../../love/public/src/text_to.mjs";
import { integer_to_try_multiple_max } from "../../../love/public/src/integer_to_try_multiple_max.mjs";
export function integer_to_try_multiple_max_text_to(verse_numbers) {
  let max = integer_to_try_multiple_max(verse_numbers);
  let s = text_to(max);
  return s;
}
