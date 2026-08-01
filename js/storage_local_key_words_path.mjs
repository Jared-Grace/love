import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function storage_local_key_words_path() {
  "Where the record of the words that have escaped into browser storage keys is kept.";
  let f_name = fn_name("storage_local_key_words");
  let p = text_combine_multiple(["data/", f_name, ".json"]);
  return p;
}
