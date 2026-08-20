import { js_array_text_add_before } from "../../js/js_array_text_add_before.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_add_after } from "../../js/js_array_text_add_after.mjs";
export const example = {
  fn: js_array_text_add_before.name,
  select: js_find_declaration_named.name,
  select_args: ["names"],
  args: ["alpha", "beta"],
  kind: "transform",
  title: "Put a word at the front of a list, by naming what it goes above",
  note: [
    "The sibling of ",
    { fn: js_array_text_add_after.name },
    ", and the case that makes it necessary rather than convenient: the first ",
    "entry of a list has nothing above it to name, so naming what it goes above is ",
    "the only way to reach that place at all. The same reason the two ",
    "call-adding verbs come as a pair — a gap has two neighbours, and only one of ",
    "them may be nameable.",
  ],
  before: `export function f() {
  let names = ["beta", "gamma"];
  return names;
}`,
  after: `export function f() {
  let names = ["alpha", "beta", "gamma"];
  return names;
}`,
};
