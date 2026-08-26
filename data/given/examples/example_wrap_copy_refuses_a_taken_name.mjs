import { function_wrap_copy } from "../../../js/function_wrap_copy.mjs";
export const example = {
  fn: function_wrap_copy.name,
  args: ["list_size"],
  kind: "files",
  refuses: true,
  title: "Refuse a copying twin whose name already has a file",
  note: [
    { fn: function_wrap_copy.name },
    " is the one wrapping verb that is never told what to call what it writes — the twin's name is worked out from the original's, so nothing at the call site names the file about to appear. That makes the file it would write over exactly the one somebody would have written by hand for the same purpose, under the same name, and afterwards nothing about ",
    { code: "list_size_copy.mjs" },
    " would say a different function used to live there. Asking whether the name is free is the first thing the wrap does, before the original is even read, so a refusal leaves the folder untouched rather than half written.",
  ],
  expectText: "refused — list_size_copy is already taken",
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_size_copy.mjs",
      source: `export function list_size_copy(list) {
  let size = list.length;
  return size;
}`,
    },
  ],
};
