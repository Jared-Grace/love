import { function_copy } from "../../js/function_copy.mjs";
export const example = {
  fn: function_copy.name,
  args: ["list_size", "list_first"],
  kind: "files",
  refuses: true,
  title: "Refuse a copy onto a name something else already answers to",
  note: [
    { fn: function_copy.name },
    " refuses a new name that is already taken. A copy writes a whole file at the new name, and writing a file that is already there replaces what it held. So ",
    { code: "list_first" },
    " would not gain a second definition to choose between — it would lose the only one it had, and gain a copy of ",
    { code: "list_size" },
    " wearing its name. Nothing about the copy would look wrong afterwards, because the file is well formed and exports what its name says.",
  ],
  expectText: "refused — list_first is already taken",
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_first.mjs",
      source: `export function list_first(list) {
  return list[0];
}`,
    },
  ],
};
