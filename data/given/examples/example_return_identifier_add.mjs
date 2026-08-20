import { js_block_return_identifier_add } from "../../js/js_block_return_identifier_add.mjs";
import { js_find_body_block } from "../../js/js_find_body_block.mjs";
export const example = {
  fn: js_block_return_identifier_add.name,
  select: js_find_body_block.name,
  select_args: [],
  args: ["last"],
  kind: "transform",
  title: "Hand back a local, by name",
  note: [
    "The last line of nearly every function here, and the last thing that still ",
    "needed a written line to say it. What comes back has to be a name and not a ",
    "working-out — which is this repo's own shape anyway, since every step gets a ",
    "name and the name is what is returned. With this the whole of a function can ",
    "be written from names alone: ",
    { code: "function_new_js" },
    ", a parameter, a call per step, an argument pointed at a local, and this. No ",
    "argument anywhere holds code, so every command on that path is one that can ",
    "be approved once instead of every time.",
  ],
  before: `export function f(ast) {
  let last = list_last(ast);
}`,
  after: `export function f(ast) {
  let last = list_last(ast);
  return last;
}`,
};
