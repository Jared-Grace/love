import { js_object_shorthand_remove } from "../../js/js_object_shorthand_remove.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_object_shorthand_add } from "../../js/js_object_shorthand_add.mjs";
export const example = {
  fn: js_object_shorthand_remove.name,
  select: js_find_declaration_named.name,
  select_args: ["transforms"],
  args: ["js_selects_unwrap"],
  kind: "transform",
  title: "Take one entry back out of a register",
  note: [
    "The undoing of ",
    { fn: js_object_shorthand_add.name },
    ", and the last of the four flat registers to get one. Putting a newly ",
    "written unit on the list that makes it reachable has been one command for a ",
    "while; taking it off again was still writing the whole set out — the shape ",
    "that drops every entry it does not mention, which cost forty-five of them ",
    "once. A unit has two ends and only one of them had a verb.",
    " ",
    "Like its ordered twin it refuses a name the set does not hold, since a ",
    "register that quietly ignores a removal reads afterwards exactly like one ",
    "that carried it out.",
  ],
  before: `export function f() {
  let transforms = {
    js_statement_wrap_if,
    js_statement_delete,
    js_selects_unwrap,
  };
  return transforms;
}`,
  after: `export function f() {
  let transforms = {
    js_statement_wrap_if,
    js_statement_delete,
  };
  return transforms;
}`,
};
