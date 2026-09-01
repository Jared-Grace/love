import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_call_name_text_cut_is } from "./js_call_name_text_cut_is.mjs";
import { property_set } from "./property_set.mjs";
import { js_call_name_number_made_is } from "./js_call_name_number_made_is.mjs";
export function js_compare_text_number_declarator_each(kinds) {
  arguments_assert(arguments, 1);
  function declarator_each(node) {
    let id = property_get(node, "id");
    let named = js_node_type_is(id, "Identifier");
    if (not(named)) {
      return;
    }
    let init = property_get(node, "init");
    let called = js_node_type_is(init, "CallExpression");
    if (not(called)) {
      return;
    }
    let callee = property_get(init, "callee");
    let callee_named = js_node_type_is(callee, "Identifier");
    if (not(callee_named)) {
      return;
    }
    let bound = property_get(id, "name");
    let callee_name = property_get(callee, "name");
    let cut = js_call_name_text_cut_is(callee_name);
    if (cut) {
      property_set(kinds, bound, "text");
      return;
    }
    let made = js_call_name_number_made_is(callee_name);
    if (made) {
      property_set(kinds, bound, "number");
    }
  }
  return declarator_each;
}
