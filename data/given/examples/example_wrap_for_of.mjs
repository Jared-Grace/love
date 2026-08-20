import { js_statement_wrap_for_of } from "../../js/js_statement_wrap_for_of.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_statement_wrap_for_of.name,
  select: js_find_declaration_named.name,
  select_args: ["first"],
  args: ["item", "ast"],
  kind: "transform",
  title: "Wrap a line in a loop over a list",
  note: [
    "The line that handled one thing now handles each of them. Writing the one ",
    "case first and then repeating it is how this shape gets reached by hand ",
    "every time, and the repeating is the whole edit — so ",
    { fn: js_statement_wrap_for_of.name },
    " takes the loop's name and the list to walk, and nothing else. This is also ",
    "the first example to name its address and its verb separately, which is what ",
    "lets any of the seven addresses be paired with it.",
  ],
  before: `export function f(ast) {
  let first = list_first(ast);
  let sized = list_size(ast);
  return sized;
}`,
  after: `export function f(ast) {
  for (let item of ast) {
    let first = list_first(ast);
  }
  let sized = list_size(ast);
  return sized;
}`,
};
