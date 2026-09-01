import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_of_types } from "./js_nodes_of_types.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_call_name_text_cut_is } from "./js_call_name_text_cut_is.mjs";
import { property_set } from "./property_set.mjs";
import { js_call_name_number_made_is } from "./js_call_name_number_made_is.mjs";
import { each } from "./each.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_name_number_is } from "./js_name_number_is.mjs";
export function js_compare_text_number_kind_of(ast) {
  arguments_assert(arguments, 1);
  let types = ["VariableDeclarator", "CallExpression"];
  let gathered = js_list_types_nodes(ast, types);
  let declarators = js_nodes_of_types(gathered, ["VariableDeclarator"]);
  let calls = js_nodes_of_types(gathered, ["CallExpression"]);
  let kinds = {};
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
  each(declarators, declarator_each);
  function kind_of(name) {
    let kept = property_or_null(kinds, name);
    let unknown = null_is(kept);
    if (not(unknown)) {
      return kept;
    }
    let numbered = js_name_number_is(name);
    if (numbered) {
      let r = "number";
      return r;
    }
    let r2 = "";
    return r2;
  }
  let r3 = {
    calls,
    kind_of,
  };
  return r3;
}
