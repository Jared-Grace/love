import { js_array_text_add } from "../../../js/js_array_text_add.mjs";
import { js_find_record_property_by_text } from "../../../js/js_find_record_property_by_text.mjs";
export const example = {
  fn: js_array_text_add.name,
  select: js_find_record_property_by_text.name,
  select_args: ["Guards", "examples"],
  args: ["example_new_guard"],
  kind: "transform",
  title: "Add a word to a list held under a name inside one record of a list",
  note: [
    "A list bound to a name is reached through the line that binds it, and until ",
    "this address there was nothing else. A list sitting under a name inside a ",
    "record inside another list is bound to no line at all, so it had no address, ",
    "and every verb that writes into a list stopped at the edge of one.",
    " ",
    "The record is picked out by a word it says about itself rather than by where ",
    "it sits, so adding a group above this one does not move the address. The part ",
    "of it is then named outright. Both halves already existed as questions; only ",
    "asking them in a row is new.",
    " ",
    "The verb is the ordinary one for adding a word to a list. Nothing about it ",
    "changed - it was always able to write here and simply could not be told where.",
  ],
  before: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      examples: ["example_first"],
    },
    {
      name: "Guards",
      examples: ["example_refused"],
    },
  ];
  return groups;
}`,
  after: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      examples: ["example_first"],
    },
    {
      name: "Guards",
      examples: ["example_refused", "example_new_guard"],
    },
  ];
  return groups;
}`,
};
