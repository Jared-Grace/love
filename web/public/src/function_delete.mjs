import { function_aliases_delete } from "../../../love/public/src/function_aliases_delete.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { data_files_update } from "../../../love/public/src/data_files_update.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
export async function function_delete(f_names_comma) {
  let f_names = text_split_comma_dot(f_names_comma);
  async function lambda(f_name) {
    const u = await function_unalias_exists(f_name);
    let exists = property_get(u, "exists");
    assert(exists);
    let f_path = property_get(u, "f_path");
    await file_delete(f_path);
    await function_aliases_delete(f_name);
  }
  await list_map_unordered_async(f_names, lambda);
  return;
  await data_files_update();
}
