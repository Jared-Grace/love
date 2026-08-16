import { js_selects_functionize_rest_returning_local } from "../../js/js_selects_functionize_rest_returning_local.mjs";
import { js_statement_find_name_body } from "../../js/js_statement_find_name_body.mjs";
export const example = {
  fn: js_selects_functionize_rest_returning_local.name,
  select: js_statement_find_name_body.name,
  select_args_multiple: ["small"],
  args: ["size_word"],
  kind: "transform",
  title: "Extract the run of decisions that closes a function, returns and all",
  note: [
    "One address, naming the first line of the run; where it ends is not a ",
    "choice, because it is the end of the body. Everything from there down ",
    "becomes a function, and the line left behind returns what that function ",
    "returns.",
    " ",
    "The plain cutter refuses this span outright, and is right to. A ",
    { code: "return" },
    " moved into a called function returns from there, and the caller carries ",
    "quietly on to the next line — the failure with no error. What makes the ",
    "move exact here is that the run reaches the last line of the body, so ",
    "there is no next line to carry on to, and the call hands the answer ",
    "straight back.",
    " ",
    "That is checked rather than trusted: the named line has to stand at the ",
    "top level of the function's own body. A run closing an inner block — the ",
    "tail of an ",
    { code: "if" },
    ", the tail of a loop — is refused, because there a return really was ",
    "skipping lines the calling line would go on to run.",
  ],
  before: `export function f(rows) {
  let count = list_size(rows);
  let small = less_than(count, 3);
  if (small) {
    return "small";
  }
  return "large";
}`,
  after: `export function f(rows) {
  let count = list_size(rows);
  return size_word(count);
}
function size_word(count) {
  arguments_assert(arguments, 1);
  let small = less_than(count, 3);
  if (small) {
    return "small";
  }
  return "large";
}`,
};
