import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { data_identifiers_fn_names_get } from "./data_identifiers_fn_names_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { js_fn_name_strings_rename } from "./js_fn_name_strings_rename.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function function_rename_fn_names_check_map(renames) {
  "Follows a whole map of renames into the places an old name is written out as text rather than called. A file holding several of the old names is rewritten once for all of them, rather than once per name.";
  arguments_assert(arguments, 1);
  let befores = object_property_names(renames);
  let i = await data_identifiers_fn_names_get();
  let groups = {};
  for (let before of befores) {
    if (property_exists_not(i, before)) {
      continue;
    }
    let users = property_get(i, before);
    for (let user of users) {
      property_initialize_list_add_if_not_includes(groups, user, before);
    }
  }
  async function rewrite(user) {
    let names = property_get(groups, user);
    function lambda(ast) {
      for (let before of names) {
        let after = property_get(renames, before);
        js_fn_name_strings_rename(ast, before, after);
      }
    }
    await function_transform(user, lambda);
  }
  let users_all = object_property_names(groups);
  await list_map_unordered_async(users_all, rewrite);
}
