import { js_fold_auto } from "../../js/js_fold_auto.mjs";
import { list_get_wrap_index } from "../../js/list_get_wrap_index.mjs";
import { list_last } from "../../js/list_last.mjs";
export const example = {
  fn: js_fold_auto.name,
  args: [list_last.name, list_get_wrap_index.name],
  kind: "transform",
  title: "Discover and fold the matching fn — without naming which",
  note: [
    { fn: js_fold_auto.name },
    " is handed a set of candidate fns (here ",
    { fn: list_last.name },
    " and ",
    { fn: list_get_wrap_index.name },
    ") and folds whichever ones already match a block of F. It finds that the hand-written ",
    { code: "list_size" },
    " then ",
    { code: "mod" },
    " IS ",
    { fn: list_get_wrap_index.name },
    " and folds it; ",
    { fn: list_last.name },
    " matches nothing and is left alone. This is the fix for reinventing a fn you did not know existed.",
  ],
  before: `export function f(examples, selected) {
  let d = subtract(selected, 1);
  let size = list_size(examples);
  let w = mod(d, size);
  let x = other(w);
  return x;
}`,
  after: `export function f(examples, selected) {
  let d = subtract(selected, 1);
  let w = list_get_wrap_index(examples, d);
  let x = other(w);
  return x;
}`,
};
