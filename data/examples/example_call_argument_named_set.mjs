import { js_call_argument_named_set } from "../../js/js_call_argument_named_set.mjs";
import { js_call_named_find } from "../../js/js_call_named_find.mjs";
export const example = {
  fn: js_call_argument_named_set.name,
  select: js_call_named_find.name,
  select_args: ["list_slice"],
  args: ["index_b", "7"],
  kind: "transform",
  title: "Change one argument of a call, naming it as the callee knows it",
  note: [
    "The argument is addressed as ",
    { code: "index_b" },
    " — the name ",
    { code: "list_slice" },
    " knows it by — rather than as the third one along. ",
    { fn: js_call_argument_named_set.name },
    " asks the called function what its parameters are, so a name that is not ",
    "one of them fails here naming the ones that are, and adding a parameter ",
    "upstream cannot silently repoint a written address at its neighbour. ",
    "Counting from the left would have done both.",
  ],
  before: `export function f(ast) {
  let sliced = list_slice(ast, 0, 3);
  return sliced;
}`,
  after: `export function f(ast) {
  let sliced = list_slice(ast, 0, 7);
  return sliced;
}`,
};
