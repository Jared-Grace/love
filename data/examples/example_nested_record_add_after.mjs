import { js_object_property_text_add_after } from "../../js/js_object_property_text_add_after.mjs";
import { js_find_object_containing_text } from "../../js/js_find_object_containing_text.mjs";
import { js_object_property_text_add } from "../../js/js_object_property_text_add.mjs";
export const example = {
  fn: js_object_property_text_add_after.name,
  select: js_find_object_containing_text.name,
  select_args: ["Guards"],
  args: ["examples", "example_new_one", "example_single_rejects_two"],
  kind: "transform",
  title: "Add two names deep at a chosen place, not at the end",
  note: [
    { fn: js_object_property_text_add.name },
    " reaches the list but only its end, and the lists kept inside a record are ",
    "exactly the ones where the end is the wrong place — a curriculum runs simple ",
    "to complex, so a new example belongs beside the one it follows from. Until ",
    "this verb the way to get it there was to append and then drag it by hand, ",
    "which is how a register ends up rewritten whole by somebody in a hurry.",
    " ",
    "Four names and not a line of code between them: the record, the list inside ",
    "it, the word going in, and the word it goes after.",
  ],
  before: `export function f() {
  let groups = [
    {
      name: "Guards",
      examples: ["example_single_rejects_two", "example_frozen_app_refused"],
    },
  ];
  return groups;
}`,
  after: `export function f() {
  let groups = [
    {
      name: "Guards",
      examples: [
        "example_single_rejects_two",
        "example_new_one",
        "example_frozen_app_refused",
      ],
    },
  ];
  return groups;
}`,
};
