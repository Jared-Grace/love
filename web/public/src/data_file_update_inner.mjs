import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_literal_is_assert } from "../../../love/public/src/js_literal_is_assert.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
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
export async function data_file_update_inner(parsed, data) {
  let { f_path } = parsed;
  let f_name = function_path_to_name(f_path);
  let { ast } = parsed;
  let functions = object_property_initialize(data, "functions", {});
  let f_this = object_property_initialize(functions, f_name, {});
  let declaration = js_declaration_single(ast);
  let async_is = object_property_get(declaration, "async");
  object_property_set(f_this, "async", async_is);
  function data_add(property_name, items) {
    let items_to_functions = object_property_initialize(
      data,
      property_name,
      {},
    );
    function identifier_add(i_name) {
      let list = object_property_initialize(items_to_functions, i_name, []);
      list_add_if_not_includes(list, f_name);
    }
    each(items, identifier_add);
    if (false) {
      let items_old = object_property_initialize(f_this, property_name, []);
      let removals = list_difference(items_old, items);
      function lambda(item) {
        let list = object_property_initialize(items_to_functions, item, []);
        list_remove_all(list, f_name);
        let e = list_empty_is(list);
        if (e) {
          object_property_delete(items_to_functions, item);
        }
      }
      each(removals, lambda);
    }
    object_property_set(f_this, property_name, items);
  }
  let f_identifiers_new = js_identifiers_names(ast);
  data_add("identifiers", f_identifiers_new);
  function lambda2(la) {
    js_visit_calls_named(fn_name.name, lambda4, ast);
    function lambda4({ args }) {
      let first = list_first(args);
      js_literal_is_assert(first);
      let value = object_property_get(first, "value");
      la(value);
    }
  }
  let identifiers_fn_names = list_adder(lambda2);
}
