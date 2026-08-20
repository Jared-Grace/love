import { js_call_argument_named_property_set } from "../../js/js_call_argument_named_property_set.mjs";
import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
import { js_statement_find_call_named } from "../../js/js_statement_find_call_named.mjs";
export const example = {
  fn: js_call_argument_named_property_set.name,
  select: js_statement_find_call_named.name,
  select_args: ["html_p_text"],
  args: ["text", "entry", "title"],
  kind: "transform",
  title: "Point an argument at one field of a record in scope",
  note: [
    "The rest of this family could point an argument at a whole local or at a ",
    "call. A field of a local was the shape left over — and it is the commonest ",
    "one of all inside a loop, where what is in scope is the record and what is ",
    "wanted is one thing out of it.",
    " ",
    "Until this existed that argument had to be written as a line of source, so a ",
    "call needing one field fell off the approved path entirely and asked the ",
    "human, for a change that could only ever have said one thing.",
    " ",
    "Three names and nothing worked out: the argument as the called function knows ",
    "it, the thing in scope, and the field. ",
    { fn: js_call_argument_named_identifier_set.name },
    " is the same verb one level shallower, when the whole local is what was ",
    "wanted.",
  ],
  before: `export function f(parent, entry) {
  html_p_text(parent, entry);
}`,
  after: `export function f(parent, entry) {
  html_p_text(parent, entry.title);
}`,
};
