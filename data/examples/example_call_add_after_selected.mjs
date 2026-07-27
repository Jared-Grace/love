import { js_selects_call_add_after } from "../../js/js_selects_call_add_after.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_selects_call_add_after.name,
  select: js_statement_find_call_named.name,
  select_args: ["run"],
  args: ["date_now_milliseconds"],
  kind: "transform",
  title: "Add a call on the line after a selected statement",
  note: [
    "Wiring a function that already exists into a place that already exists — the ",
    "edit made every time a new helper is written. The address is a selector (",
    { code: "js_statement_find_call_named" },
    "), and the only other argument is a function's ",
    "name, so the call writes itself: ",
    { fn: js_selects_call_add_after.name },
    " reads the named function to fill the arguments in, and binds the result to ",
    "a local when there is one to bind. Its older relative reaches a whole block ",
    "and appends at the end, which is the wrong place whenever order matters.",
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
