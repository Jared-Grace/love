import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { js_strings } from "./js_strings.mjs";
import { list_adder } from "./list_adder.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { property_get } from "./property_get.mjs";
import { js_flo } from "./js_flo.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete } from "./property_delete.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
import { list_difference } from "./list_difference.mjs";
import { each } from "./each.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export function data_file_update_inner(parsed, data) {
  let f_path = property_get(parsed, "f_path");
  let f_name = function_path_to_name(f_path);
  let ast = property_get(parsed, "ast");
  let functions = property_initialize(data, "functions", {});
  let f_this = property_initialize(functions, f_name, {});
  let declaration = js_flo(ast);
  let async_is = property_get(declaration, "async");
  property_set(f_this, "async", async_is);
  function data_add(property_name, items) {
    let items_to_functions = property_initialize(data, property_name, {});
    function identifier_add(i_name) {
      let list = property_initialize(items_to_functions, i_name, []);
      list_add_if_not_includes(list, f_name);
    }
    each(items, identifier_add);
    let items_old = property_initialize(f_this, property_name, []);
    let removals = list_difference(items_old, items);
    function lambda(item) {
      let list = property_initialize(items_to_functions, item, []);
      list_remove_every(list, f_name);
      let e = list_empty_is(list);
      if (e) {
        property_delete(items_to_functions, item);
      }
      each(removals, lambda);
    }
    property_set(f_this, property_name, items);
  }
  let f_identifiers_new = js_identifiers_names(ast);
  data_add("identifiers", f_identifiers_new);
  let strings_new = js_strings(ast);
  data_add("strings", strings_new);
  function lambda2(la) {
    js_visit_calls_named(ast, fn_name.name, lambda4);
    function lambda4({ args }) {
      let first = fn_name_arg_get(args, f_name);
      let value = property_get(first, "value");
      la(value);
    }
  }
  let identifiers_fn_names = list_adder(lambda2);
  data_add("identifiers_fn_names", identifiers_fn_names);
}
