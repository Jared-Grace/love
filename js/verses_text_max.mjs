import { text_split_comma_dash } from "./text_split_comma_dash.mjs";
import { integer_to_try_multiple_max_text_to } from "./integer_to_try_multiple_max_text_to.mjs";
export function verses_text_max(verses_text) {
  "a passage names its verses either as a comma list (5,6,7) or as a dash range (5-7) and a single verse is both - so read it either way and answer the HIGHEST verse number as text";
  let parts = text_split_comma_dash(verses_text);
  let max = integer_to_try_multiple_max_text_to(parts);
  return max;
}
