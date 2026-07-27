import { js_object_shorthand_add } from "../../js/js_object_shorthand_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
export const example = {
  fn: js_object_shorthand_add.name,
  select: js_find_declaration_named.name,
  select_args: ["transforms"],
  args: ["js_selects_unwrap"],
  kind: "transform",
  title: "Add one entry to a register, leaving the rest alone",
  note: [
    "Every register in this repo is a set of settings whose key and value are the ",
    "same word — what an example may name, what a gate must run — so putting a ",
    "newly written unit on the list that makes it reachable was, until this verb, ",
    "a hand edit. It was the commonest one left, and the most dangerous: with no ",
    "way to add one entry, the way round it was to write the whole set out again ",
    "with ",
    { code: "js_statement_replace_code" },
    ", which replaces every entry with whatever was typed. That silently cost ",
    "forty-five of them once. Adding one is the only shape that cannot.",
  ],
  before: `export function f() {
  let transforms = {
    js_statement_wrap_if,
    js_statement_delete,
  };
  return transforms;
}`,
  after: `export function f() {
  let transforms = {
    js_statement_wrap_if,
    js_statement_delete,
    js_selects_unwrap,
  };
  return transforms;
}`,
};
