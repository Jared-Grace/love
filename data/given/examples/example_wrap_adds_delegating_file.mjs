import { function_wrap } from "../../js/function_wrap.mjs";
export const example = {
  fn: function_wrap.name,
  args: ["list_size", "list_count"],
  kind: "files",
  title: "Wrap a function in a new one that delegates to it",
  note: [
    { fn: function_wrap.name },
    " adds a new ",
    { code: "list_count.mjs" },
    " that imports ",
    { code: "list_size" },
    ", forwards the same arguments to it, and returns the result — a seam you can grow (add a check, rename a concept) without touching the original or its callers.",
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
      source: `import { list_size } from "./list_size.mjs";
export function list_count(list) {
  let size = list_size(list);
  return size;
}`,
    },
  ],
};
