import { js_selects_text_set } from "../../../js/js_selects_text_set.mjs";
import { js_find_record_property_by_text } from "../../../js/js_find_record_property_by_text.mjs";
export const example = {
  fn: js_selects_text_set.name,
  select: js_find_record_property_by_text.name,
  select_args: ["Guards", "title"],
  args: ["Refusals"],
  kind: "transform",
  title: "Write over a word held under a name inside one record of a list",
  note: [
    "Writing over one value was the commonest hand-made edit nothing named could ",
    "make. Measured across two thousand commits, twenty-four single-file hand ",
    "edits changed one written-out value and nothing else - more than every prose ",
    "edit no verb spanned put together.",
    " ",
    "The verb for it half existed. One that finds a named part of a record across ",
    "a whole file was already here, and it refuses unless exactly one part carries ",
    "that name - which refuses precisely the file where every record is written ",
    "with the same names. What was missing was not the writing but the address.",
    " ",
    "So the verb takes a selection instead. The record is picked out by a word it ",
    "says about itself, then opened at the part wanted, and the same verb writes ",
    "wherever any address can reach.",
  ],
  before: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      title: "Small ones",
    },
    {
      name: "Guards",
      title: "Refused ones",
    },
  ];
  return groups;
}`,
  after: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      title: "Small ones",
    },
    {
      name: "Guards",
      title: "Refusals",
    },
  ];
  return groups;
}`,
};
