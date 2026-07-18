import { function_arguments_assert_each_add } from "../../js/function_arguments_assert_each_add.mjs";
export const example = {
  tool: "aea",
  fn: function_arguments_assert_each_add.name,
  args: ["js_return_argument_set", "js_return_is, js_expression_node_is"],
  kind: "transform",
  title: "Add a two-sided guard to a slot setter",
  note: "aea prepends arguments_assert_each and repairs imports; one predicate per parameter.",
  before: `import { property_set } from "./property_set.mjs";
export function js_return_argument_set(r, a) {
  property_set(r, "argument", a);
}`,
  command: `aea js_return_argument_set "js_return_is, js_expression_node_is"`,
  after: `import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_return_is } from "./js_return_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_return_argument_set(r, a) {
  arguments_assert_each(arguments, [js_return_is, js_expression_node_is]);
  property_set(r, "argument", a);
}`,
};
