import { js_object_property_text_add_before } from "../../js/js_object_property_text_add_before.mjs";
import { js_find_object_containing_text } from "../../js/js_find_object_containing_text.mjs";
import { js_object_property_text_add_after } from "../../js/js_object_property_text_add_after.mjs";
export const example = {
  fn: js_object_property_text_add_before.name,
  select: js_find_object_containing_text.name,
  select_args: ["Guards"],
  args: ["examples", "example_new_one", "example_single_rejects_two"],
  kind: "transform",
  title: "Add two names deep at the head of the list",
  note: [
    "The sibling of ",
    { fn: js_object_property_text_add_after.name },
    ", and the one place that verb cannot reach: the head of a list has nothing ",
    "above it to name. A curriculum needs exactly this — the simplest thing to ",
    "show belongs first, and first is where a new simplest thing keeps arriving.",
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
        "example_new_one",
        "example_single_rejects_two",
        "example_frozen_app_refused",
      ],
    },
  ];
  return groups;
}`,
};
