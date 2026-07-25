import { js_statement_if_return_add } from "../../js/js_statement_if_return_add.mjs";
export const example = {
  fn: js_statement_if_return_add.name,
  args: ["ready_is"],
  kind: "transform",
  title: "Add an early return inside a selected if",
  note: [
    "The same selector as the wrap example, ",
    { code: "js_statement_find_call_named" },
    ", now paired with a different transform — ",
    { fn: js_statement_if_return_add.name },
    " — which puts a bare ",
    { code: "return" },
    " inside the then-block. Neither half knows about the other; they meet at a list of selected nodes. Running the two examples back to back on one function is how a guard clause gets built: wrap the test, then return under it.",
  ],
  before: `export function f(a) {
  if (ready_is(a)) {
  }
}`,
  after: `export function f(a) {
  if (ready_is(a)) {
    return;
  }
}`,
};
