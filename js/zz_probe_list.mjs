import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function zz_probe_list() {
  let file_path = text_combine_multiple([
    "js/",
    fn_name("permission_grant_names"),
    ".mjs",
  ]);
  await file_overwrite(file_path, "");
}
