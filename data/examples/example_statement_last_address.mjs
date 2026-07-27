import { js_selects_call_add_before } from "../../js/js_selects_call_add_before.mjs";
import { js_find_statement_last } from "../../js/js_find_statement_last.mjs";
export const example = {
  fn: js_selects_call_add_before.name,
  select: js_find_statement_last.name,
  select_args: [],
  args: ["date_now_milliseconds"],
  kind: "transform",
  title: "Add a call before the last line, whatever that line is",
  note: [
    "An address that takes no argument at all. Every other one names something ",
    "about a line — what it calls, what it binds, what it says — and the last ",
    "line need have none of those; it has only its place. It is also the one end ",
    "of a block that cannot be named by its neighbour, since nothing follows it. ",
    "The verb is the same one used elsewhere with a completely different address, ",
    "which is the whole return on keeping the two halves apart.",
  ],
  before: `export function f(ast) {
  let sized = list_size(ast);
  return sized;
}`,
  after: `export function f(ast) {
  let sized = list_size(ast);
  let now = date_now_milliseconds();
  return sized;
}`,
};
