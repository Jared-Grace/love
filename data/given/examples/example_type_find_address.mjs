import { js_statement_if_return_add } from "../../js/js_statement_if_return_add.mjs";
import { js_type_find } from "../../js/js_type_find.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
export const example = {
  fn: js_statement_if_return_add.name,
  select: js_type_find.name,
  select_args: ["IfStatement"],
  args: [],
  kind: "transform",
  title: "Address a line by what kind of node it is",
  note: [
    "The address for a line that nothing else can name: it calls nothing, binds ",
    "nothing, and has no prose over it — but it is the only ",
    { code: "if" },
    " in the function, and that is enough to point at it. The verb here is the ",
    "one from the guard-clause pair, reached through a second address, which is ",
    "the whole reason the two halves are kept apart.",
    " ",
    "What it costs is that ",
    { fn: js_type_find.name },
    " answers only while the shape stays unique — a second ",
    { code: "if" },
    " and it refuses rather than guessing which was meant. That is why a function's ",
    "own body has a named address of its own, ",
    { fn: js_find_body_block.name },
    ": asking for the one block stops working as soon as the body holds anything ",
    "with a block in it.",
  ],
  before: `export function f(list, name) {
  let found = list_find(list, name);
  if (found) {
  }
  return found;
}`,
  after: `export function f(list, name) {
  let found = list_find(list, name);
  if (found) {
    return;
  }
  return found;
}`,
};
