import { js_selects_call_add_before } from "../../js/js_selects_call_add_before.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_call_add_before.name,
  select: js_statement_find_call_named.name,
  select_args: ["wait"],
  args: ["date_now_milliseconds"],
  kind: "transform",
  title: "Add a call on the line before a selected statement",
  note: [
    "The same place in the file, reached from the other side: after ",
    { code: "run" },
    " and before ",
    { code: "wait" },
    " are one gap, so ",
    { fn: js_selects_call_add_before.name },
    " and its pair land the same call there while naming a different statement. ",
    "That is what lets one address be written from whichever neighbour is easier ",
    "to name — the last statement of a block has no line after it to select.",
  ],
  before: `export function f(a) {
  run(a);
  wait(a);
}`,
  after: `export function f(a) {
  run(a);
  let now = date_now_milliseconds();
  wait(a);
}`,
};
