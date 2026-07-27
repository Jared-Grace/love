import { js_selects_unwrap } from "../../js/js_selects_unwrap.mjs";
import { js_find_statement_index } from "../../js/js_find_statement_index.mjs";
export const example = {
  fn: js_selects_unwrap.name,
  select: js_find_statement_index.name,
  select_args: ["0"],
  args: [],
  kind: "transform",
  title: "Take the lines back out of a wrapper",
  note: [
    "Exactly the previous example undone, which is how it is checked: wrap then ",
    "unwrap returns the source it started from, character for character. ",
    { fn: js_selects_unwrap.name },
    " undoes the loop and the test alike, because both hold their lines the same ",
    "way. The address here is the one of last resort — ",
    { code: "js_find_statement_index" },
    " names a line by its place, which is all a wrapper written a moment ago has ",
    "to be named by. What no verb can undo is meaning: lines written to run ",
    "under a test now run always.",
  ],
  before: `export function f(ast) {
  for (let item of ast) {
    let first = list_first(ast);
  }
  let sized = list_size(ast);
  return sized;
}`,
  after: `export function f(ast) {
  let first = list_first(ast);
  let sized = list_size(ast);
  return sized;
}`,
};
