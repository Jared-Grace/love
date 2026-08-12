import { function_params_delete } from "../../js/function_params_delete.mjs";
export const example = {
  fn: function_params_delete.name,
  args: ["list_size", "factor,facto"],
  kind: "files",
  refuses: true,
  title: "Refuse a list of parameters without deleting the good ones first",
  note: [
    { fn: function_params_delete.name },
    " takes a comma list, and a refusal has to be all or nothing. ",
    { code: "factor" },
    " is real and ",
    { code: "facto" },
    " is a letter short, so applying them one at a time drops ",
    { code: "factor" },
    " from the declaration and from every call site, and only then gives up — a folder left half changed under a command that reported a refusal. Every name is checked before any is removed, so the second one being wrong means the first one never moves.",
  ],
  expectText: "refused — list_size has no parameter called facto",
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
};
