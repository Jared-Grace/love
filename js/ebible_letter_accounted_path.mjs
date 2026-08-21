import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function ebible_letter_accounted_path() {
  "Where the record of what has already been said to eBible, and what was looked at and found to be no fault, is kept.";
  let f_name = fn_name("ebible_letter_accounted");
  let path = text_combine_multiple(["data/given/", f_name, ".json"]);
  return path;
}
