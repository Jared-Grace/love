import { js_call_argument_named_call_set } from "../../js/js_call_argument_named_call_set.mjs";
import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_call_argument_named_call_set.name,
  select: js_statement_find_call_named.name,
  select_args: ["html_style_margin_y"],
  args: ["value", "app_shared_spaced_tiny_gap"],
  kind: "transform",
  title: "Route an argument through the getter that owns the value",
  note: [
    "A file spelling a constant out holds a copy of a decision that already has a ",
    "name somewhere else, so changing the decision changes only some of the ",
    "copies. Routing the spelling through the name is what ends that, and it is ",
    "the commonest repair in this repo.",
    " ",
    "It was also, until this verb, the repair that always asked. The only way to ",
    "write a getter into an argument was to hand over a line of source, and a ",
    "parameter that holds source can never be granted — so the most frequent safe ",
    "edit here sat on the one path that prompts every time.",
    " ",
    "Both halves are names: the argument as the called function knows it, and the ",
    "function that produces the value. ",
    { fn: js_call_argument_named_identifier_set.name },
    " is the same verb when the value is already a local. The call writes itself ",
    "from the named function's own parameters, so a getter takes none and arrives ",
    "as itself.",
  ],
  before: `export function f(p) {
  let value = "0.25em";
  html_style_margin_y(p, value);
}`,
  after: `export function f(p) {
  let value = "0.25em";
  html_style_margin_y(p, app_shared_spaced_tiny_gap());
}`,
};
