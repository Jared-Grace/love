import { function_wrap } from "../../js/function_wrap.mjs";
export const example = {
  fn: function_wrap.name,
  args: ["list_size", "list_first"],
  kind: "files",
  refuses: true,
  title: "Refuse a wrapper whose name something else already answers to",
  note: [
    { fn: function_wrap.name },
    " writes a whole new file holding the wrapper, and a name that already has a file has nowhere for a new one to go. Asking first is the difference between the wrapper appearing and ",
    { code: "list_first" },
    " being replaced by a function that forwards to ",
    { code: "list_size" },
    ". The wrapper is well formed either way, so nothing about the file afterwards says a function used to live there.",
  ],
  expectText: "refused — list_first is already taken",
  before: [
    {
      name: "list_size.mjs",
      source: `export function list_size(list) {
  return list.length;
}`,
    },
    {
      name: "list_first.mjs",
      source: `export function list_first(list) {
  return list[0];
}`,
    },
  ],
};
