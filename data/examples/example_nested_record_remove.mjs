import { js_object_property_text_remove } from "../../js/js_object_property_text_remove.mjs";
import { js_find_object_containing_text } from "../../js/js_find_object_containing_text.mjs";
export const example = {
  fn: js_object_property_text_remove.name,
  select: js_find_object_containing_text.name,
  select_args: ["Guards"],
  args: ["examples", "example_retired"],
  kind: "transform",
  title: "Take one back out of a list two names deep",
  note: [
    "The undo of the previous example, and the reason to have it is that a ",
    "register is not only added to — an example withdrawn, a gate retired, a name ",
    "tried and thought better of. Without it, undoing meant writing the whole ",
    "list out again, which is the one shape that silently drops everything it did ",
    "not mention. Both verbs read the list through the same helper, so they ",
    "cannot come to disagree about where they are looking.",
  ],
  before: `export function f() {
  let groups = [
    {
      name: "Guards",
      examples: ["example_single_rejects_two", "example_retired"],
    },
  ];
  return groups;
}`,
  after: `export function f() {
  let groups = [
    {
      name: "Guards",
      examples: ["example_single_rejects_two"],
    },
  ];
  return groups;
}`,
};
