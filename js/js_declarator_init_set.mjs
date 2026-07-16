import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_declarator_is } from "./js_declarator_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_declarator_init_set(declarator, init) {
  arguments_assert_each(arguments, [js_declarator_is, js_expression_node_is]);
  property_set(declarator, "init", init);
}
