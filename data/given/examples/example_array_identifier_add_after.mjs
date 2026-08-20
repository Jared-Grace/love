import { js_array_identifier_add_after } from "../../js/js_array_identifier_add_after.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_identifier_add } from "../../js/js_array_identifier_add.mjs";
export const example = {
  fn: js_array_identifier_add_after.name,
  select: js_find_declaration_named.name,
  select_args: ["gates"],
  args: ["examples_data_gate_run", "guard_gate_run"],
  kind: "transform",
  title: "Put a gate at a chosen place rather than at the end",
  note: [
    { fn: js_array_identifier_add.name },
    " appends, which is right whenever the order carries no meaning and wrong for ",
    "the registers where it does.",
    " ",
    "The place is named by its neighbour rather than by counting, because a count ",
    "is wrong the moment anybody inserts above it and nothing says so, while a ",
    "neighbour is either still there or the command refuses. Under several ",
    "conversations editing one directory at once, that difference is the whole ",
    "reliability of the verb.",
    " ",
    "There is a before-twin as well, because the head of a list has no neighbour ",
    "above it to name.",
  ],
  before: `export function f() {
  let gates = [guard_gate_run, examples_gate_run];
  return gates;
}`,
  after: `export function f() {
  let gates = [guard_gate_run, examples_data_gate_run, examples_gate_run];
  return gates;
}`,
};
