import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_statement_if_is } from "./js_statement_if_is.mjs";
import { js_statement_node_is } from "./js_statement_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_statement_if_consequent_set(statement_if, value) {
  arguments_assert_each(arguments, [js_statement_if_is, js_statement_node_is]);
  let consequent = property_set(statement_if, "consequent", value);
  return consequent;
}
