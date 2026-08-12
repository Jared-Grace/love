import { function_params_delete } from "../../js/function_params_delete.mjs";
export const example = {
  fn: function_params_delete.name,
  args: ["list_size", "facto"],
  kind: "files",
  refuses: true,
  title: "Refuse to delete a parameter that is not there",
  note: [
    { code: "facto" },
    " is ",
    { code: "factor" },
    " with a letter missing, and until this guard was added that single letter did real damage rather than nothing. A name nothing answers to is not found, being not found becomes a position of minus one, and minus one counts from the END of a list — so the command deleted the LAST parameter from ",
    { code: "list_size" },
    " and the LAST argument from every call site, then reported a clean run. Nothing threw: exactly one thing had been removed, which is all the removal was asked to check. The guard is asked once, where the position is worked out, so the verbs that move and swap a parameter are covered by the same line.",
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
