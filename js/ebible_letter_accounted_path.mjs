import { json_extension } from "./json_extension.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function ebible_letter_accounted_path() {
  "Where the record of what has already been said to eBible, and what was looked at and found to be no fault, is kept.";
  let path = text_combine_multiple([
    "data/given/",
    fn_name("ebible_letter_accounted"),
    json_extension(),
  ]);
  return path;
}
