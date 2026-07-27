import { js_selects_call_add_after } from "../../js/js_selects_call_add_after.mjs";
import { js_find_string_starting_with } from "../../js/js_find_string_starting_with.mjs";
export const example = {
  fn: js_selects_call_add_after.name,
  select: js_find_string_starting_with.name,
  select_args: ["Measure how long"],
  args: ["date_now_milliseconds"],
  kind: "transform",
  title: "Address a line by the prose written above it",
  note: [
    "This repo comments in bare strings because a normalizing pass writes the ",
    "tree back out and a comment lives nowhere in a tree. The consequence is ",
    "worth having on purpose: the prose is made of real nodes, and real nodes ",
    "have addresses. So a sentence somebody wrote to explain a passage also ",
    "marks where that passage begins — a bookmark that says what it means, which ",
    "no line number does. Pairing it with a verb it was never written for is the ",
    "point: neither half knows the other.",
  ],
  before: `export function f(ast) {
  ("Measure how long the walk took");
  let sized = list_size(ast);
  return sized;
}`,
  after: `export function f(ast) {
  ("Measure how long the walk took");
  let now = date_now_milliseconds();
  let sized = list_size(ast);
  return sized;
}`,
};
