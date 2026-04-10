import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { function_aliases_search } from "../../../love/public/src/function_aliases_search.mjs";
import { function_alias_delete } from "../../../love/public/src/function_alias_delete.mjs";
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
    let result = await function_aliases_search(f_name);
    let exists2 = property_exists(result, f_name);
    if (exists2) {
      let value = property_get(object, property_name);
      await function_alias_delete(alias_old);
    }
  }
  await list_map_unordered_async(f_names, lambda);
  return;
  await data_files_update();
}
