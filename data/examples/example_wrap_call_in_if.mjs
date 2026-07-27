import { js_statement_wrap_if } from "../../js/js_statement_wrap_if.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_statement_wrap_if.name,
  select: js_statement_find_call_named.name,
  select_args: ["list_size"],
  args: [],
  kind: "transform",
  title: "Wrap a call in an if, by selecting it first",
  note: [
    "Two functions pair up here. A ",
    { code: "selector" },
    " finds the statement calling ",
    { code: "list_size" },
    " — then the transform ",
    { fn: js_statement_wrap_if.name },
    " rewrites just that node, wrapping the call in an ",
    { code: "if" },
    " test. Selector and transform are separate halves joined by a list of selected nodes, so every new transform written this way composes with every existing selector — this seam replaced the retired marker cursor.",
  ],
  before: `export function f(a) {
  list_size(a);
}`,
  after: `export function f(a) {
  if (list_size(a)) {
  }
}`,
};
