import { js_object_key_rename } from "../../../js/js_object_key_rename.mjs";
import { js_find_declaration_named } from "../../../js/js_find_declaration_named.mjs";
import { js_property_value_set } from "../../../js/js_property_value_set.mjs";
export const example = {
  fn: js_object_key_rename.name,
  select: js_find_declaration_named.name,
  select_args: ["r"],
  args: ["checked", "offenders"],
  kind: "transform",
  title: "Give one entry of a record a different name",
  note: [
    "An entry is made of a name and a value, and only the value half had a verb — ",
    { fn: js_property_value_set.name },
    ". So a report handing a number under the wrong word had to be corrected by ",
    "hand, and correcting a returned record by hand is the shape that quietly ",
    "replaces every entry it does not mention.",
    " ",
    "The case below is the one that prompted it. A gate answering how much it had ",
    "checked, where the number is really how many things were wrong, says nothing ",
    "checked on every run that passes — which is also exactly what a gate whose ",
    "sweep had stopped reaching anything would say. Nothing was wrong with it but ",
    "the word.",
    " ",
    "Both names are read as plain names and nothing more, so the path stays ",
    "approvable once rather than every time, and it refuses a record holding no ",
    "entry under the name asked for — a rename that quietly does nothing reads ",
    "afterwards exactly like one that was carried out.",
  ],
  before: `export function f() {
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}`,
  after: `export function f() {
  let r = {
    offenders: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}`,
};
