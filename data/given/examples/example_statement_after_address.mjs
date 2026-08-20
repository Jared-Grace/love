import { js_statement_delete } from "../../js/js_statement_delete.mjs";
import { js_find_statement_after } from "../../js/js_find_statement_after.mjs";
export const example = {
  fn: js_statement_delete.name,
  select: js_find_statement_after.name,
  select_args: ["first"],
  args: [],
  kind: "transform",
  title: "Address the line after another line",
  note: [
    "The first address that is relative rather than absolute: it names a line by ",
    "its neighbour instead of by anything about itself. That reaches the lines no ",
    "other address can — one that binds nothing, calls nothing and says nothing ",
    "still sits after something nameable. ",
    { fn: js_find_statement_after.name },
    " was itself written entirely through these commands, with no hand editing, ",
    "which is the point of it: the tools are now enough to build the next tool.",
  ],
  before: `export function f(ast) {
  let first = list_first(ast);
  let sized = list_size(ast);
}`,
  after: `export function f(ast) {
  let first = list_first(ast);
}`,
};
