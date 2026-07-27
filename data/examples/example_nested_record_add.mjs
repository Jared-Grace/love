import { js_object_property_text_add } from "../../js/js_object_property_text_add.mjs";
import { js_find_object_containing_text } from "../../js/js_find_object_containing_text.mjs";
export const example = {
  fn: js_object_property_text_add.name,
  select: js_find_object_containing_text.name,
  select_args: ["Guards"],
  args: ["examples", "example_new_one"],
  kind: "transform",
  title: "Add to a list two names deep, inside the right record",
  note: [
    "The first address that reaches past the top of a function. Every other one ",
    "answers there, so a list inside a record inside a list — which is the shape ",
    "of the registers deciding what actually runs — had no address at all, and ",
    "putting a newly written unit where it counts stayed a hand edit however many ",
    "verbs existed. The record is found by a word written in it, ",
    { code: "Guards" },
    ", because that is how a reader tells the records apart too. Only what a ",
    "record says directly counts, or one holding another would answer to ",
    "everything the inner one says.",
  ],
  before: `export function f() {
  let groups = [
    { name: "Single edits", examples: ["example_atomize_nested_call"] },
    { name: "Guards", examples: ["example_single_rejects_two"] },
  ];
  return groups;
}`,
  after: `export function f() {
  let groups = [
    { name: "Single edits", examples: ["example_atomize_nested_call"] },
    {
      name: "Guards",
      examples: ["example_single_rejects_two", "example_new_one"],
    },
  ];
  return groups;
}`,
};
