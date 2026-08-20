import { js_call_argument_named_text_set } from "../../js/js_call_argument_named_text_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
import { js_call_argument_named_identifier_set } from "../../js/js_call_argument_named_identifier_set.mjs";
export const example = {
  fn: js_call_argument_named_text_set.name,
  select: js_call_named_find.name,
  select_args: ["property_get"],
  args: ["property_name", "body"],
  kind: "transform",
  title: "Point an argument at a written word",
  note: [
    "The rest of this family could point an argument at a name, a call, a field ",
    "or a getter. A plain piece of writing was the shape left over — and it is ",
    "the one every reader of a record needs, because the field being asked for ",
    "is written rather than named. Until this verb that argument had to arrive ",
    "as a line of code, which is the one shape no standing approval can cover.",
    " ",
    "Both arguments stay plain: the argument as the called function knows it, ",
    "and the word itself. The word is quoted before it is written, so nothing ",
    "handed in here can arrive as code — which is what keeps this approvable ",
    "once rather than every time. Its sibling ",
    { fn: js_call_argument_named_identifier_set.name },
    " is the one to reach for when what goes there is already in scope.",
  ],
  before: `export function f(node) {
  let value = property_get(node, name_wanted);
  return value;
}`,
  after: `export function f(node) {
  let value = property_get(node, "body");
  return value;
}`,
};
