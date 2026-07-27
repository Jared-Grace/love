import { js_array_text_add_after } from "../../js/js_array_text_add_after.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_add } from "../../js/js_array_text_add.mjs";
import { js_find_statement_after } from "../../js/js_find_statement_after.mjs";
export const example = {
  fn: js_array_text_add_after.name,
  select: js_find_declaration_named.name,
  select_args: ["names"],
  args: ["beta", "alpha"],
  kind: "transform",
  title: "Put a word into a list at a chosen place",
  note: [
    { fn: js_array_text_add.name },
    " can only append, and for a long time that was the whole story: an entry ",
    "that had to sit somewhere particular — a rung of a reading order, a gate ",
    "that must run after another — arrived at the end and was then dragged into ",
    "place by hand. That was the commonest hand edit left in the repo, and it is ",
    "this one line.",
    " ",
    "The place is named by its neighbour rather than counted to, for the same ",
    "reason ",
    { fn: js_find_statement_after.name },
    " names one: a count is wrong the moment anybody inserts above it and nothing ",
    "says so, while a neighbour is either still there or the command refuses.",
  ],
  before: `export function f() {
  let names = ["alpha", "gamma"];
  return names;
}`,
  after: `export function f() {
  let names = ["alpha", "beta", "gamma"];
  return names;
}`,
};
