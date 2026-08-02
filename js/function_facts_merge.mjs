import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
import { property_delete } from "./property_delete.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { property_set } from "./property_set.mjs";
export function function_facts_merge(facts, data) {
  arguments_assert(arguments, 2);
  ("Fold what one file says into the index everything is looked up in.");
  ("The cheap half. It touches lists and records and never opens a file, so it");
  ("runs the same whether the facts were read off the disk a moment ago or kept");
  ("from the last time the file was seen unchanged.");
  let f_name = property_get(facts, "f_name");
  let functions = property_initialize(data, "functions", {});
  let f_this = property_initialize(functions, f_name, {});
  let async_is = property_get(facts, "async_is");
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
  let identifiers = property_get(facts, "identifiers");
  data_add("identifiers", identifiers);
  let strings = property_get(facts, "strings");
  data_add("strings", strings);
  let identifiers_fn_names = property_get(facts, "identifiers_fn_names");
  data_add("identifiers_fn_names", identifiers_fn_names);
}
