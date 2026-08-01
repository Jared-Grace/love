import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_filter_property_path_not } from "./list_filter_property_path_not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function js_operators_raw(ast) {
  arguments_assert(arguments, 1);
  ("Every comparison or sum in this code still written as an operator, where the pass");
  ("that tidies a file would write a call instead.");
  ("A function standing for an operator is passed over, by the same rule the pass");
  ("uses, because it cannot be written in terms of itself.");
  let binary = js_operators_binary();
  let unary = js_operators_unary();
  let kinds = [
    {
      type: "BinaryExpression",
      operators: binary,
    },
    {
      type: "UnaryExpression",
      operators: unary,
    },
  ];
  let f_name = js_flo_name(ast);
  let raw = [];
  for (let kind of kinds) {
    let type = property_get(kind, "type");
    let operators = property_get(kind, "operators");
    let usable = list_filter_property_path_not(
      operators,
      ["fn", "name"],
      f_name,
    );
    function lambda(node) {
      let node_operator = property_get(node, "operator");
      let matches = list_filter_property(usable, "operator", node_operator);
      let matched = list_empty_not_is(matches);
      if (matched) {
        list_add(raw, node_operator);
      }
    }
    js_visit_type_node(ast, type, lambda);
  }
  return raw;
}
