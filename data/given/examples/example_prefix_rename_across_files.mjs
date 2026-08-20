import { functions_rename_if_starts_with } from "../../js/functions_rename_if_starts_with.mjs";
export const example = {
  fn: functions_rename_if_starts_with.name,
  args: ["list_", "array_"],
  kind: "files",
  title: "Rename a whole namespace at once",
  note: [
    { fn: functions_rename_if_starts_with.name },
    " renames every function whose name starts with ",
    { code: "list_" },
    " to start with ",
    { code: "array_" },
    " instead — each definition moves to its new file, and every call and import that named the old prefix is repointed in the same pass. One command migrates a family; no site is left behind.",
  ],
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_first.mjs",
      source: `import { list_size } from "./list_size.mjs";
export function list_first(list) {
  let size = list_size(list);
  return list[0];
}`,
    },
  ],
  after: [
    {
      name: "array_size.mjs",
      source: `export function array_size(list) {
  return list.length;
}`,
    },
    {
      name: "array_first.mjs",
      source: `import { array_size } from "./array_size.mjs";
export function array_first(list) {
  let size = array_size(list);
  return list[0];
}`,
    },
  ],
};
