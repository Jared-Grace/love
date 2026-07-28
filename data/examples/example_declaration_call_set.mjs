import { js_call_argument_named_call_set } from "../../js/js_call_argument_named_call_set.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_declaration_call_set } from "../../js/js_declaration_call_set.mjs";
export const example = {
  fn: js_declaration_call_set.name,
  select: js_find_declaration_named.name,
  select_args: ["value"],
  args: ["app_shared_spaced_tiny_gap"],
  kind: "transform",
  title: "Route a spelled-out constant through its getter",
  note: [
    "The far side of the argument list from ",
    { fn: js_call_argument_named_call_set.name },
    ". That one reaches a value sitting inside a call; a value simply bound to a ",
    "name sits in no call at all, and until this verb existed that line could only ",
    "be changed by handing over a line of source.",
    " ",
    "Both halves are names — the line is addressed by what it binds, and the new ",
    "value is a function name — so nothing has to be worked out and the whole path ",
    "stays as safe to approve once as the rest of the family.",
    " ",
    "The call is written from the named function's own parameters, so a getter ",
    "takes none and arrives as itself.",
  ],
  before: `export function f(p) {
  let value = "0.25em";
  html_style_margin_y(p, value);
}`,
  after: `export function f(p) {
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_y(p, value);
}`,
};
