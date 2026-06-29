import { function_aliases_delete } from "../../../love/public/src/function_aliases_delete.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { text_split_comma_dot_map_unordered } from "../../../love/public/src/text_split_comma_dot_map_unordered.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_copy_generic_args } from "../../../love/public/src/function_copy_generic_args.mjs";
export async function function_copy_generic_args_replace(
  plugin_fn,
  args_comma,
) {
  let list = text_split_comma_dot(args_comma);
  let fr = list_first_remaining(list);
  let name_old = property_get(fr, "first");
  await text_split_comma_dot_map_unordered(name_old, lambda);
  async function lambda(f_name) {
    const u = await function_unalias_exists(f_name);
    let exists = property_get(u, "exists");
    assert(exists);
    let f_path = property_get(u, "f_path");
    await file_delete(f_path);
    await function_aliases_delete(f_name);
  }
  return;
  let r = await function_copy_generic_args(plugin_fn, args_comma);
  return r;
}
