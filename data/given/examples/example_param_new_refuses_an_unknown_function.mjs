import { function_param_new } from "../../js/function_param_new.mjs";
export const example = {
  fn: function_param_new.name,
  args: ["list_sise", "factor", "1"],
  kind: "files",
  refuses: true,
  title: "Refuse to add a parameter to a function that is not there",
  note: [
    { code: "list_sise" },
    " is ",
    { code: "list_size" },
    " with one letter wrong. There is no such function, so there is no declaration to give a parameter to and no call to append an argument at — every part of the work matches nothing. Saying so is the whole value: the alternative is a command that does nothing at all and reports the same as one that worked, so the typo is discovered later by whoever wonders why the parameter never appeared.",
  ],
  expectText: "refused — there is no function called list_sise",
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
};
