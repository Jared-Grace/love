import { list_skip } from "./list_skip.mjs";
import { list_to } from "./list_to.mjs";
import { property_get } from "./property_get.mjs";
import { js_name_new_get_args_list } from "./js_name_new_get_args_list.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { identity } from "./identity.mjs";
export async function js_identifier_name_new(ast, plugin_fn) {
  let args = list_to(arguments);
  let list = list_skip(args, 2);
  let r2 = await js_name_new_get_args_list(plugin_fn, list, identity);
  let name_old = property_get(r2, "name_old");
  let name_new = property_get(r2, "name_new");
  let r = js_identifier_rename(ast, name_old, name_new);
  return r;
}
