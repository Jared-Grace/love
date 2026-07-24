import { function_delete_unused } from "../../js/function_delete_unused.mjs";
export const example = {
  fn: function_delete_unused.name,
  args: ["list_size"],
  kind: "files",
  refuses: true,
  title: "Refuse to delete a function that is still used",
  note: [
    { fn: function_delete_unused.name },
    " finds ",
    { code: "list_size" },
    " referenced in ",
    { code: "app_z.mjs" },
    ", so it refuses — the same scan that made the previous delete safe stops this one. The file stays.",
  ],
  expectText: "refused — app_z.mjs still uses list_size",
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "app_z.mjs",
      source: `import { list_size } from "./list_size.mjs";
export function app_z(list) {
  return list_size(list);
}`,
    },
  ],
};
