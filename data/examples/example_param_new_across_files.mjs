import { function_param_new } from "../../js/function_param_new.mjs";
export const example = {
  fn: function_param_new.name,
  args: ["list_size", "factor", "1"],
  kind: "files",
  title: "Add a parameter across every caller",
  note: [
    { fn: function_param_new.name },
    " gives ",
    { code: "list_size" },
    " a new ",
    { code: "factor" },
    " parameter — and in the same pass appends its default ",
    { code: "1" },
    " as an argument at every call site, so no existing caller breaks. One command grows a function's signature everywhere at once.",
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
};
