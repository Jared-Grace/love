import { js_array_text_add } from "../../js/js_array_text_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_array_text_add.name,
  select: js_find_declaration_named.name,
  select_args: ["names"],
  args: ["beta"],
  kind: "transform",
  title: "Add one written word to a list of them",
  note: [
    "The pair to the entry-adding verb, for the registers that are ordered ",
    "rather than named — a reading order, a run of groups. The word is built as ",
    "a written word straight away rather than being spelled into a line and read ",
    "back, so there is no moment at which it could be taken for something to ",
    "work out, and the command stays one that can be approved once. Note what it ",
    "does not reach: a list nested inside something else still has no address, ",
    "which is the next thing missing.",
  ],
  before: `export function f() {
  let names = ["alpha"];
  return names;
}`,
  after: `export function f() {
  let names = ["alpha", "beta"];
  return names;
}`,
};
