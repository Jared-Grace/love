import { js_block_call_add } from "../../js/js_block_call_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
export const example = {
  fn: js_block_call_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["js_marker_remove"],
  kind: "transform",
  title: "Call an existing function at the end of the body",
  note: [
    "The verb the whole name-only way of writing a function rests on: everything ",
    "handed in is a function name somebody picked from a list, and the call ",
    "writes itself from that function's own parameters. Its neighbours name a ",
    "gap by the line above or below it, which needs a nameable neighbour; this ",
    "one names the block instead, so it reaches the one end of a block no ",
    "statement can point at. Address the body with ",
    { fn: js_find_body_block.name },
    " rather than by node type — that stops working the moment the body holds an ",
    "if or a loop, which is to say as soon as the function is worth writing.",
  ],
  before: `export function f(ast) {
  js_atomize(ast);
}`,
  after: `export function f(ast) {
  js_atomize(ast);
  js_marker_remove(ast);
}`,
};
