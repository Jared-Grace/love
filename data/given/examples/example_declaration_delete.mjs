import { js_statement_delete } from "../../js/js_statement_delete.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_statement_delete.name,
  select: js_find_declaration_named.name,
  select_args: ["unused"],
  args: [],
  kind: "transform",
  title: "Delete a line, addressed by the name it binds",
  note: [
    "The same address, a different verb, and the verb is older than the seam it ",
    "is used through here. ",
    { fn: js_statement_delete.name },
    " already took a list of nodes as its second argument, which is exactly what ",
    "a transform takes, so it composed with every selector from the day the seam ",
    "existed — nothing had to be written, only noticed. Worth reading as a ",
    "reminder that the shape is a shape, not a naming convention: a function fits ",
    "it by taking what it takes.",
  ],
  before: `export function f(a) {
  let unused = twice(a);
  return a;
}`,
  after: `export function f(a) {
  return a;
}`,
};
