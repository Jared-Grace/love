import { js_statement_return_argument_set } from "../../js/js_statement_return_argument_set.mjs";
import { js_find_return } from "../../js/js_find_return.mjs";
export const example = {
  fn: js_statement_return_argument_set.name,
  select: js_find_return.name,
  select_args: [],
  args: ["joined"],
  kind: "transform",
  title: "Set what a selected return hands back",
  note: [
    "A second selector through the same seam. ",
    { code: "js_find_return" },
    " finds the return — it takes no arguments at all, where the earlier examples' selector took the name of a call — and ",
    { fn: js_statement_return_argument_set.name },
    " sets what that return hands back. The selectors differ in what they need and agree in what they answer with, which is the whole reason a transform can be written once and reached by either.",
  ],
  before: `export function f(a) {
  let joined = list_join(a);
  return;
}`,
  after: `export function f(a) {
  let joined = list_join(a);
  return joined;
}`,
};
