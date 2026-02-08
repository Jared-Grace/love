import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_dependencies_code_multiple } from "../../../love/public/src/function_dependencies_code_multiple.mjs";
export async function function_dependencies_code_unaliased(f_names_comma) {
  let split = text_split_comma(f_names_comma);
  async function lambda(f_name) {
    let v = await function_name_unalias(f_name);
    let unaliased = object_property_get(v, "unaliased");
    return unaliased;
  }
  let waited = await list_map_unordered_async(split, lambda);
  let function_copy_replace_first = list_first(waited);
  let d = await function_dependencies_code_multiple(waited);
  let v2 = {
    d,
    unaliased: function_copy_replace_first,
  };
  return v2;
}
