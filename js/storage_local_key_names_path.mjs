import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function storage_local_key_names_path() {
  "Where the record of the function names that have escaped into browser storage keys is kept.";
  let p = text_combine_multiple([
    "data/",
    fn_name("storage_local_key_names"),
    ".json",
  ]);
  return p;
}
