import { js_array_text_remove } from "../../js/js_array_text_remove.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_add } from "../../js/js_array_text_add.mjs";
export const example = {
  fn: js_array_text_remove.name,
  select: js_find_declaration_named.name,
  select_args: ["names"],
  args: ["beta"],
  kind: "transform",
  title: "Take one written word back out of a list of them",
  note: [
    "The undoing of ",
    { fn: js_array_text_add.name },
    ", and needed far more often than undoing sounds. Adding can only append, so ",
    "an entry that has to sit in a particular place — a rung of a reading order, ",
    "a gate that must run after another — arrives at the end and then has to ",
    "leave. Until this verb the leaving was a hand edit, which is how a register ",
    "ends up rewritten whole by somebody in a hurry.",
    " ",
    "It refuses a word the list does not hold rather than doing nothing quietly. A ",
    "removal that finds nothing and a removal that worked leave a list that looks ",
    "exactly the same, so silence there would be indistinguishable from success.",
  ],
  before: `export function f() {
  let names = ["alpha", "beta"];
  return names;
}`,
  after: `export function f() {
  let names = ["alpha"];
  return names;
}`,
};
