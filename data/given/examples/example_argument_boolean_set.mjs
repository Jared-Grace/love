import { js_call_argument_named_boolean_set } from "../../../js/js_call_argument_named_boolean_set.mjs";
import { js_call_named_find } from "../../../js/js_call_named_find.mjs";
import { js_call_argument_named_text_set } from "../../../js/js_call_argument_named_text_set.mjs";
export const example = {
  fn: js_call_argument_named_boolean_set.name,
  select: js_call_named_find.name,
  select_args: ["property_set"],
  args: ["value", "false"],
  kind: "transform",
  title: "Point an argument at a plain yes or no",
  note: [
    "The family could already reach a name, a call, a getter, a field, a whole ",
    "node and a written word — ",
    { fn: js_call_argument_named_text_set.name },
    " is the nearest neighbour. A yes or no was the one shape left over, and it ",
    "was the shape that stopped the naming path: writing a whole transform from ",
    "commands ran nine steps and then needed a written-out false, which nothing ",
    "could put there.",
    " ",
    "The word is read as code and then checked to be nothing but true or false, ",
    "so a call dressed as an argument is refused here rather than written into a ",
    "file. That refusal is what lets the command be approved once instead of ",
    "every time.",
    " ",
    "Reading it as code rather than trusting the text is the whole of the care. A ",
    "command line hands every argument over as writing, and the word false is a ",
    "nonempty piece of writing, so a value taken at its word here arrives in the ",
    "file as a quoted word that is always yes — the opposite of what was asked ",
    "for, and nothing goes red about it.",
  ],
  before: `export function f(node) {
  property_set(node, "shorthand", shorthand_is);
}`,
  after: `export function f(node) {
  property_set(node, "shorthand", false);
}`,
};
