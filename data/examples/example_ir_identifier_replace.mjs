import { function_identifier_replace } from "../../js/function_identifier_replace.mjs";
export const example = {
  fn: function_identifier_replace.name,
  args: ["x", "a * b"],
  kind: "transform",
  title: "Replace an identifier with an expression, everywhere in the fn",
  note: [
    { alias: true },
    " swaps every occurrence of an identifier for a parsed ",
    { code: "expression" },
    " — not just a name, so ",
    { code: "x" },
    " becomes ",
    { code: "a * b" },
    " at both sites. Unlike a rename, the replacement can be any expression.",
  ],
  before: `export function scale(a, b) {
  let y = x;
  return x + y;
}`,
  after: `export function scale(a, b) {
  let y = a * b;
  return a * b + y;
}`,
};
