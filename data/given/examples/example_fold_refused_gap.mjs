import { js_fold } from "../../js/js_fold.mjs";
import { list_get_wrap_index } from "../../js/list_get_wrap_index.mjs";
export const example = {
  fn: js_fold.name,
  args: [list_get_wrap_index.name],
  kind: "transform",
  title: "Refuse to fold across a gap between the matched statements",
  note: [
    "The MVP folds only a CONTIGUOUS block — nothing moves, so the fold is sound without a purity oracle. Here an unrelated ",
    { code: "let d = subtract(selected, 1)" },
    " sits between ",
    { code: "list_size" },
    " and ",
    { code: "mod" },
    ", so no contiguous window matches and ",
    { fn: js_fold.name },
    " declines. Gapped folds need side-effect commutativity and are deferred.",
  ],
  before: `export function f(examples, selected) {
  let size = list_size(examples);
  let d = subtract(selected, 1);
  let w = mod(d, size);
  return w;
}`,
  after: `export function f(examples, selected) {
  let size = list_size(examples);
  let d = subtract(selected, 1);
  let w = mod(d, size);
  return w;
}`,
};
