import { js_selects_number_set } from "../../../js/js_selects_number_set.mjs";
import { js_find_record_property_by_text } from "../../../js/js_find_record_property_by_text.mjs";
export const example = {
  fn: js_selects_number_set.name,
  select: js_find_record_property_by_text.name,
  select_args: ["Guards", "kept"],
  args: ["8"],
  kind: "transform",
  title: "Raise a number held under a name inside one record of a list",
  note: [
    "The sister of the verb that writes a word, and split from it for one reason ",
    "only: a command line hands every argument over as text.",
    " ",
    "A number is written into a file without quotation marks and a word with them, ",
    "so once the argument has arrived the two cannot be told apart. A number set ",
    "as a word turns a count into a spelling - nothing downstream would complain, ",
    "and everything reading it would be wrong.",
    " ",
    "The conversion happens in the verb and nowhere deeper, so the one function ",
    "that writes a value stays about writing rather than about guessing what a ",
    "caller meant.",
  ],
  before: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      kept: 2,
    },
    {
      name: "Guards",
      kept: 4,
    },
  ];
  return groups;
}`,
  after: `export function groups() {
  let groups = [
    {
      name: "Single edits",
      kept: 2,
    },
    {
      name: "Guards",
      kept: 8,
    },
  ];
  return groups;
}`,
};
