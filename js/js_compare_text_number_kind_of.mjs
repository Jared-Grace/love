import { js_compare_text_number_kind_of_kind_of } from "./js_compare_text_number_kind_of_kind_of.mjs";
import { js_compare_text_number_kind_of_declarator_each } from "./js_compare_text_number_kind_of_declarator_each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_of_types } from "./js_nodes_of_types.mjs";
import { each } from "./each.mjs";
export function js_compare_text_number_kind_of(ast) {
  arguments_assert(arguments, 1);
  let types = ["VariableDeclarator", "CallExpression"];
  let gathered = js_list_types_nodes(ast, types);
  let declarators = js_nodes_of_types(gathered, ["VariableDeclarator"]);
  let calls = js_nodes_of_types(gathered, ["CallExpression"]);
  let kinds = {};
  let declarator_each = js_compare_text_number_kind_of_declarator_each(kinds);
  each(declarators, declarator_each);
  let kind_of = js_compare_text_number_kind_of_kind_of(kinds);
  let r = {
    calls,
    kind_of,
  };
  return r;
}
