import { js_call_argument_named_getter_set } from "../../js/js_call_argument_named_getter_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
export const example = {
  fn: js_call_argument_named_getter_set.name,
  select: js_call_named_find.name,
  select_args: ["html_style_gap"],
  args: ["value", "app_shared_spaced_tiny_gap"],
  kind: "transform",
  title: "Route a spelled-out value through the name that holds it",
  note: [
    "A value written out where a constant already holds it is the commonest thing ",
    "wrong with this repo — change the constant and only some of the copies move. ",
    "Undoing one was, until this verb, a text edit every time: the sibling that ",
    "sets an argument, ",
    { fn: js_call_argument_named_identifier_set.name },
    ", wants a name already in scope, and a getter is a call rather than a name.",
    " ",
    "Both arguments here are still bare names — the argument as the called ",
    "function knows it, and the constant by its own name — so the command stays ",
    "one that can be approved once and used everywhere. The name of the constant ",
    "is checked to be only a name before it is called, so nothing worked out can ",
    "arrive dressed as a getter.",
  ],
  before: `export function f(row) {
  html_style_gap(row, "0.25em");
}`,
  after: `export function f(row) {
  html_style_gap(row, app_shared_spaced_tiny_gap());
}`,
};
