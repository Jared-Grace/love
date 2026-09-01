import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function js_variable_box_refusals_kind_each(ast, named_is, refusals) {
  arguments_assert(arguments, 3);
  function kind_each(kind) {
    let holders = js_list_type_nodes(ast, kind);
    function holder_each(holder) {
      let params = property_get(holder, "params");
      function param_each(param) {
        let is = named_is(param);
        if (is) {
          list_add(refusals, "a function inside takes the same word in");
        }
      }
      each(params, param_each);
      let id = property_get(holder, "id");
      let same = named_is(id);
      if (same) {
        list_add(refusals, "a function inside answers to the same word");
      }
    }
    each(holders, holder_each);
  }
  return kind_each;
}
