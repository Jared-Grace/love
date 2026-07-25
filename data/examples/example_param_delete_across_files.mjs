import { function_params_delete } from "../../js/function_params_delete.mjs";
export const example = {
  fn: function_params_delete.name,
  args: ["list_size", "factor"],
  kind: "files",
  title: "Delete a parameter across every caller",
  note: [
    { fn: function_params_delete.name },
    " drops the ",
    { code: "factor" },
    " parameter from ",
    { code: "list_size" },
    " — and in the same pass strips the argument at that position from every call site, so no caller is left passing a value that no longer exists. One command shrinks a function's signature everywhere at once.",
  ],
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list, factor) {
  return list.length;
}`,
    },
    {
      name: "list_first.mjs",
      source: `import { list_size } from "./list_size.mjs";
export function list_first(list) {
  let size = list_size(list, 1);
  return list[0];
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
      name: "list_first.mjs",
      source: `import { list_size } from "./list_size.mjs";
export function list_first(list) {
  let size = list_size(list);
  return list[0];
}`,
    },
  ],
};
