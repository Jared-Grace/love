import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_remove_all } from "../../../love/public/src/list_remove_all.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
export function data_file_update_inner(parsed, data) {
  let { f_path } = parsed;
  let f_name = function_path_to_name(f_path);
  let { ast } = parsed;
  let f_identifiers_new = js_identifiers_names(ast);
  const property_name = "identifiers";
  let identifiers = object_property_initialize(data, property_name, {});
  function lambda2(i_name) {
    let list = object_property_initialize(identifiers, i_name, []);
    list_add_if_not_includes(list, f_name);
  }
  each(f_identifiers_new, lambda2);
  let functions = object_property_initialize(data, "functions", {});
  let f_this = object_property_initialize(functions, f_name, {});
  let declaration = js_declaration_single(ast);
  let async_is = object_property_get(declaration, "async");
  object_property_set(f_this, "async", async_is);
  let f_identifiers_old = object_property_initialize(f_this, property_name, []);
  let removals = list_difference(f_identifiers_old, f_identifiers_new);
  function lambda(item) {
    let list = object_property_initialize(identifiers, item, []);
    list_remove_all(list, f_name);
    let e = list_empty_is(list);
    if (e) {
      object_property_delete(identifiers, item);
    }
  }
  each(removals, lambda);
  object_property_set(f_this, property_name, f_identifiers_new);
  return;
  function lambda4() {}
  js_visit_calls_named(fn_name.name, lambda4, ast);
}
