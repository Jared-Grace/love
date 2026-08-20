import { js_return_argument_set } from "../../js/js_return_argument_set.mjs";
import { function_arguments_assert_each_add } from "../../js/function_arguments_assert_each_add.mjs";
export const example = {
  fn: js_return_argument_set.name,
  args: ["b"],
  kind: "transform",
  title: "Set a return statement's argument",
  note: [
    { fn: js_return_argument_set.name },
    " sets a return statement's argument slot to a new expression — here ",
    { code: "a" },
    " becomes ",
    { code: "b" },
    ". It is the same guarded slot-setter shape as the if-test setter, on a different node; the two-sided guard it carries is the one ",
    { fn: function_arguments_assert_each_add.name },
    " installs.",
  ],
  before: `export function f() {
  return a;
}`,
  after: `export function f() {
  return b;
}`,
};
