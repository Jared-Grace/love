import { js_atomize } from "../../js/js_atomize.mjs";
export const example = {
  fn: js_atomize.name,
  args: [],
  kind: "transform",
  title: "A nested call in a loop header is left where it stands",
  note: [
    { fn: js_atomize.name },
    " lifts an inner call into a ",
    { code: "let" },
    " above the statement it sits in — but a loop header is asked again every time round, and the ",
    { code: "let" },
    " would go in the block above the loop. The answer would then be taken once and kept for the whole loop. Measured on 2026-08-02: a loop over a list its own body shortens gave back ",
    { code: "[0, 1]" },
    " before and ",
    { code: "[0, 1, 2, 3]" },
    " after, so this is the one place where lifting a piece out is not the same code.",
  ],
  before: `export function f(list) {
  let seen = [];
  for (let i = 0; less_than(i, subtract(list.length, 1)); i++) {
    list.pop();
    seen.push(i);
  }
  return seen;
}`,
  after: `export function f(list) {
  let seen = [];
  for (let i = 0; less_than(i, subtract(list.length, 1)); i++) {
    list.pop();
    seen.push(i);
  }
  return seen;
}`,
};
