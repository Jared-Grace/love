import { function_delete_unused } from "../../js/function_delete_unused.mjs";
export const example = {
  fn: function_delete_unused.name,
  args: ["list_size"],
  kind: "files",
  title: "Delete a function only after proving nothing uses it",
  note: [
    { fn: function_delete_unused.name },
    " scans every file for a reference before removing one — ",
    { code: "app_y.mjs" },
    " never calls ",
    { code: "list_size" },
    ", so the file is safe to delete. If any file used it, the delete is refused instead.",
  ],
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "app_y.mjs",
      source: `export function app_y(count) {
  return count + 1;
}`,
    },
  ],
  after: [
    {
      name: "app_y.mjs",
      source: `export function app_y(count) {
  return count + 1;
}`,
    },
  ],
};
