import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_call_named_find_index } from "../../js/js_call_named_find_index.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
export const example = {
  fn: js_call_argument_named_identifier_set.name,
  select: js_call_named_find_index.name,
  select_args: ["html_p_text", "1"],
  args: ["root", "parent"],
  kind: "transform",
  title: "Say which of several calls to the same name you meant",
  note: [
    "A selector answers exactly one node, so ",
    { fn: js_call_named_find.name },
    " refuses a name that is called twice — correctly, because two places is not ",
    "an address. What it left missing was any way to say which of the two was ",
    "meant, and every verb in the vocabulary was unreachable in that file until ",
    "one of the calls went away.",
    " ",
    "The answer is a second word rather than a different address. Counting is in ",
    "written order and starts at nothing, so ",
    { code: "1" },
    " is the second call — read off the file the same way a person reads it.",
    " ",
    "It is the address of last resort at the call level, for the same reason ",
    { code: "js_find_statement_index" },
    " is at the line level: a call inserted above shifts every number below it. ",
    "Reach for a name that is called once first, and come here when there is none.",
  ],
  before: `export function f(parent, text) {
  let a = html_p_text(parent, text);
  let b = html_p_text(root, text);
  return b;
}`,
  after: `export function f(parent, text) {
  let a = html_p_text(parent, text);
  let b = html_p_text(parent, text);
  return b;
}`,
};
