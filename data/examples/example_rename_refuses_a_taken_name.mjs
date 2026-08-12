import { function_rename } from "../../js/function_rename.mjs";
export const example = {
  fn: function_rename.name,
  args: ["list_size", "list_first"],
  kind: "files",
  refuses: true,
  title: "Refuse a rename onto a name something else already answers to",
  refusesTitle: "Refuse a rename onto a name something else already answers to",
  note: [
    { fn: function_rename.name },
    " refuses a new name that is already taken, because a rename onto a taken name does not land two things on one word — it destroys one of them. Here ",
    { code: "list_first" },
    " already exists, so renaming ",
    { code: "list_size" },
    " onto it would rewrite every mention of the old name into the new one and then move the file over the top of the file that was already there. Both functions are gone afterwards and one word answers for both.",
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
