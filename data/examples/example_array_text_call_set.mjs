import { js_array_text_remove } from "../../js/js_array_text_remove.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_call_set } from "../../js/js_array_text_call_set.mjs";
export const example = {
  fn: js_array_text_call_set.name,
  select: js_find_declaration_named.name,
  select_args: ["sizes"],
  args: ["0.25em", "app_shared_spaced_tiny_gap"],
  kind: "transform",
  title: "Turn a written entry into a call to its getter",
  note: [
    "A register entry is ever made of one of three things: a written word, a name, ",
    "or a call. The family could write the first two, and the third is exactly ",
    "what a spelled-out constant has to become once its getter exists.",
    " ",
    "Doing it as ",
    { fn: js_array_text_remove.name },
    " and then an add would say the same thing in two commands and read as two ",
    "changes — and in between, the register is short an entry, which is a state ",
    "nobody wants and a peer's sweep can commit. Setting it in place also keeps ",
    "the order, which for a register is part of the meaning.",
    " ",
    "The entry is found by the word it holds, so a register that does not hold ",
    "that word refuses rather than quietly doing nothing.",
  ],
  before: `export function f() {
  let sizes = ["0.5em", "0.25em"];
  return sizes;
}`,
  after: `export function f() {
  let sizes = ["0.5em", app_shared_spaced_tiny_gap()];
  return sizes;
}`,
};
