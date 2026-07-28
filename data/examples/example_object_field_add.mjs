import { js_object_text_add } from "../../js/js_object_text_add.mjs";
import { js_object_shorthand_add } from "../../js/js_object_shorthand_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_object_field_add } from "../../js/js_object_field_add.mjs";
export const example = {
  fn: js_object_field_add.name,
  select: js_find_declaration_named.name,
  select_args: ["narrowed"],
  args: ["meaning", "entry", "meaning"],
  kind: "transform",
  title: "Carry one more field through into a record",
  note: [
    "Three names — the key to write, the thing to read it out of, and the field to ",
    "read. Nothing here has to be worked out, which is what keeps it on the path ",
    "that can be approved once.",
    " ",
    "Its neighbours write the other two things an entry is ever made of: ",
    { fn: js_object_shorthand_add.name },
    " writes a name already standing on its own, and ",
    { fn: js_object_text_add.name },
    " writes a sentence. A field of something else was the shape neither reached, ",
    "and it is what every narrowing report is built out of — a filter keeps some ",
    "of what it was handed and drops the rest, and every kept field looks like ",
    "this.",
    " ",
    "So carrying one more field through a filter used to need a written line, for ",
    "a change that could not have said anything else.",
  ],
  before: `export function f(entry) {
  let narrowed = {
    name: entry.name,
  };
  return narrowed;
}`,
  after: `export function f(entry) {
  let narrowed = {
    name: entry.name,
    meaning: entry.meaning,
  };
  return narrowed;
}`,
};
