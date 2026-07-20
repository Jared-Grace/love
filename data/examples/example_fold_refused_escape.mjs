import { js_fold } from "../../js/js_fold.mjs";
import { list_get_wrap_index } from "../../js/list_get_wrap_index.mjs";
export const example = {
  fn: js_fold.name,
  args: [list_get_wrap_index.name],
  kind: "transform",
  title: "Refuse to fold when an internal local escapes the block",
  note: [
    "Folding collapses the matched block into one opaque call, deleting its internal locals. Here ",
    { code: "size" },
    " is used again after the block (",
    { code: "other(size)" },
    "), so the call would delete a value F still needs. ",
    { fn: js_fold.name },
    " refuses — after equals before, nothing changed.",
  ],
  before: `export function f(examples, selected) {
  let d = subtract(selected, 1);
  let size = list_size(examples);
  let w = mod(d, size);
  let x = other(size);
  return x;
}`,
  after: `export function f(examples, selected) {
  let d = subtract(selected, 1);
  let size = list_size(examples);
  let w = mod(d, size);
  let x = other(size);
  return x;
}`,
};
