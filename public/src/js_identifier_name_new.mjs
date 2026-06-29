import { js_name_new_get_args_list } from "../../../love/public/src/js_name_new_get_args_list.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
export async function js_identifier_name_new(ast, name_from, name_to) {
  let r2 = await js_name_new_get_args_list(plugin_fn, list, name_old_transform);
  let r = js_identifier_rename(ast, name_from, name_to);
  return r;
}
