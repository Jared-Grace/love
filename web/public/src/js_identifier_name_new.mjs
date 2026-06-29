import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_name_new_get_args_list } from "../../../love/public/src/js_name_new_get_args_list.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export async function js_identifier_name_new(ast, plugin_fn) {
  let args = list_to(arguments);
  let skipped = list_skip(list2, skip_count);
  let list = text_split_comma_dot(args_comma);
  let r2 = await js_name_new_get_args_list(plugin_fn, list, identity);
  let name_old = property_get(r2, "name_old");
  let name_new = property_get(r2, "name_new");
  let r = js_identifier_rename(ast, name_old, name_new);
  return r;
}
