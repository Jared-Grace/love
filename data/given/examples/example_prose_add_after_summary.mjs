import { js_flo_prose_add } from "../../../js/js_flo_prose_add.mjs";
export const example = {
  fn: js_flo_prose_add.name,
  args: ["It is read once and kept."],
  kind: "transform",
  title: "Add a line to what a function says about itself",
  note: [
    "The ordinary shape: the account is written first and the count of arguments ",
    "below it, so the new line goes at the end of the account and stays above ",
    "everything the function does.",
    " ",
    "Adding a paragraph of explanation was a hand edit every time, and it is the ",
    "commonest thing a commit under no command's name turns out to be. ",
    { fn: js_flo_prose_add.name },
    " is the transform under the command that does it, split out so the placing ",
    "could be shown a before and an after rather than only run.",
  ],
  before: `export function f(a) {
  "What it is for.";
  arguments_assert(arguments, 1);
  work(a);
}`,
  after: `export function f(a) {
  "What it is for.";
  "It is read once and kept.";
  arguments_assert(arguments, 1);
  work(a);
}`,
};
