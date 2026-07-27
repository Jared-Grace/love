import { js_call_callee_set } from "../../js/js_call_callee_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
export const example = {
  fn: js_call_callee_set.name,
  select: js_call_named_find.name,
  select_args: ["list_size"],
  args: ["list_first"],
  kind: "transform",
  title: "Point one call at a different function",
  note: [
    "Chosen from the history rather than from a list: reading back the hand-made ",
    "edits to this repo's code, this shape came up more than any other a verb ",
    "could have made — a helper superseded, and the calls following it one site ",
    "at a time. That is what makes it different from a rename, where the old name ",
    "stops existing; here the old function stays and its other callers keep it. ",
    "The whole argument is a function name, so the command carrying it needs no ",
    "standing approval it could not honestly be given.",
  ],
  before: `export function f(list) {
  let size = list_size(list);
  return size;
}`,
  after: `export function f(list) {
  let size = list_first(list);
  return size;
}`,
};
