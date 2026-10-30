import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_extension } from "./json_extension.mjs";
export function storage_local_key_owner_renames_path() {
  "Where the record of renamed functions whose old names sit in browser storage keys is kept. The function of the same name is written out from this file, so the browser can read it.";
  let ext_j = json_extension();
  let p = text_combine_multiple([
    "data/given/frozen/",
    fn_name("storage_local_key_owner_renames"),
    ext_j,
  ]);
  return p;
}
