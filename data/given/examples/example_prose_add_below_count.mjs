import { js_flo_prose_add } from "../../../js/js_flo_prose_add.mjs";
import { js_statements_prose_head_last_or_null } from "../../../js/js_statements_prose_head_last_or_null.mjs";
export const example = {
  fn: js_flo_prose_add.name,
  args: ["It is read once and kept."],
  kind: "transform",
  title: "Add a line where the count of arguments is written first",
  note: [
    "The same edit on a function that writes the count of its arguments above ",
    "its account rather than below it. Both spellings are in the repo, and this ",
    "one used to place the new line above the summary - because the count read ",
    "as the first thing the function does, and the whole account then sat ",
    "underneath the line being added.",
    " ",
    "Nothing went red when that happened. The file still parsed, the account was ",
    "still all prose, and the only thing that noticed was a person reading it ",
    "afterwards, which is why the case is written down here rather than left to ",
    "the next reader to find again. ",
    { fn: js_statements_prose_head_last_or_null.name },
    " is what steps over the count on the way down, and it stops at the first ",
    "real statement so that an account written further down the body is not ",
    "mistaken for the one at the top.",
  ],
  before: `export function f(a) {
  arguments_assert(arguments, 1);
  "What it is for.";
  work(a);
}`,
  after: `export function f(a) {
  arguments_assert(arguments, 1);
  "What it is for.";
  "It is read once and kept.";
  work(a);
}`,
};
