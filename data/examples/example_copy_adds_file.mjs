import { function_copy } from "../../js/function_copy.mjs";
export const example = {
  fn: function_copy.name,
  args: ["list_size", "list_count"],
  kind: "files",
  title: "Copy a function to a new name, ready to diverge",
  note: [
    { fn: function_copy.name },
    " duplicates ",
    { code: "list_size" },
    " into a new ",
    { code: "list_count.mjs" },
    " with the name rewritten, leaving the original untouched — a fresh file to edit without disturbing callers of the first.",
  ],
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
  ],
  after: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_count.mjs",
      source: `export function list_count(list) {
  return list.length;
}`,
    },
  ],
};
