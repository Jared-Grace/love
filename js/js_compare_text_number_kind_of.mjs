import { js_compare_text_number_kind_of_declarator_each } from "./js_compare_text_number_kind_of_declarator_each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_of_types } from "./js_nodes_of_types.mjs";
import { not } from "./not.mjs";
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
  let declarator_each = js_compare_text_number_kind_of_declarator_each(kinds);
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
