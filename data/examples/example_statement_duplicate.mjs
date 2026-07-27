import { js_statement_duplicate } from "../../js/js_statement_duplicate.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_statement_duplicate.name,
  select: js_find_declaration_named.name,
  select_args: ["found"],
  args: [],
  kind: "transform",
  title: "Copy a line below itself, renaming what the copy binds",
  note: [
    "The third thing that can happen to a line addressed by the name it binds — ",
    "it can be replaced, deleted, or copied. A copy is the one of the three that ",
    "cannot be written by hand safely: two lines binding the same name is a ",
    "shadowing bug in the making, and the second one silently wins for every line ",
    "under it. So the verb renames what the copy binds before putting it back, and ",
    "the new name is the one nothing else in the function is using.",
  ],
  before: `export function f(ast, name) {
  let found = js_type_find(ast, name);
  return found;
}`,
  after: `export function f(ast, name) {
  let found = js_type_find(ast, name);
  let found2 = js_type_find(ast, name);
  return found;
}`,
};
