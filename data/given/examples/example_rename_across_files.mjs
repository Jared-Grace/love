import { function_rename } from "../../js/function_rename.mjs";
export const example = {
  fn: function_rename.name,
  args: ["list_size", "list_length"],
  kind: "files",
  title: "Rename a function across every file that uses it",
  note: [
    { fn: function_rename.name },
    " moves the definition and repoints every reference in one operation — the call sites in ",
    { code: "app_x.mjs" },
    ", its ",
    { code: "import" },
    ", and the file name itself all change together, so the rename is behavior-preserving by construction.",
  ],
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "app_x.mjs",
      source: `import { list_size } from "./list_size.mjs";
export function app_x(list) {
  let n = list_size(list);
  return n + list_size(list);
}`,
    },
  ],
  after: [
    {
      name: "list_length.mjs",
      source: `export function list_length(list) {
  return list.length;
}`,
    },
    {
      name: "app_x.mjs",
      source: `import { list_length } from "./list_length.mjs";
export function app_x(list) {
  let n = list_length(list);
  return n + list_length(list);
}`,
    },
  ],
};
