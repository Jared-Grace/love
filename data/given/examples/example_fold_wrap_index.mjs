import { js_fold } from "../../js/js_fold.mjs";
import { list_get_wrap_index } from "../../js/list_get_wrap_index.mjs";
export const example = {
  fn: js_fold.name,
  args: [list_get_wrap_index.name],
  kind: "transform",
  title: "Fold hand-written wrap logic into a call to the pure fn",
  note: [
    { fn: js_fold.name },
    " (run as ",
    { code: "function_fold list_get_wrap_index <F>" },
    ") recognises ",
    { fn: list_get_wrap_index.name },
    "'s atomized body — ",
    { code: "list_size" },
    " then ",
    { code: "mod" },
    " — appearing inline in F and collapses it into one call. This is the opposite of inlining: never author the same logic twice.",
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
