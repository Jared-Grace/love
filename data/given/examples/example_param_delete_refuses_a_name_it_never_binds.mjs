import { function_param_delete } from "../../../js/function_param_delete.mjs";
export const example = {
  fn: function_param_delete.name,
  args: ["list_size", "facto"],
  kind: "files",
  refuses: true,
  title: "Refuse the single-name delete when the function never binds that name",
  note: [
    "The list-taking verb next door writes this refusal down already, and that is not the same claim. The corpus runs a folder-sized twin rather than the command itself, so what a pairing most easily loses is a guard standing on one side and not the other — and a refusal written down for one command says nothing at all about the command beside it. The two do reach the same question about where the parameter sits; whether they still do is exactly what goes stale unnoticed, and the only thing that can catch it is each of them being asked here.",
    " ",
    { code: "facto" },
    " is ",
    { code: "factor" },
    " a letter short, and until the guard was there that letter deleted the LAST parameter instead — not found came back as a position of minus one, and minus one counts from the end.",
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
