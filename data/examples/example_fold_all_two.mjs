import { js_fold_all } from "../../js/js_fold_all.mjs";
import { list_get_wrap_index } from "../../js/list_get_wrap_index.mjs";
export const example = {
  fn: js_fold_all.name,
  args: [list_get_wrap_index.name],
  kind: "transform",
  title: "Fold every occurrence, not just the first",
  note: [
    { fn: js_fold_all.name },
    " loops the single-occurrence ",
    { code: "js_fold" },
    " to fixpoint. Here ",
    { fn: list_get_wrap_index.name },
    "'s atomized body — ",
    { code: "list_size" },
    " then ",
    { code: "mod" },
    " — appears twice in F, so both blocks collapse into calls. Complete-on-a-function, not one-shot.",
  ],
  before: `export function f(examples, a, b) {
  let sa = list_size(examples);
  let wa = mod(a, sa);
  let sb = list_size(examples);
  let wb = mod(b, sb);
  let total = add(wa, wb);
  return total;
}`,
  after: `export function f(examples, a, b) {
  let wa = list_get_wrap_index(examples, a);
  let wb = list_get_wrap_index(examples, b);
  let total = add(wa, wb);
  return total;
}`,
};
