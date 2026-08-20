import { js_array_identifier_remove } from "../../js/js_array_identifier_remove.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_identifier_add } from "../../js/js_array_identifier_add.mjs";
export const example = {
  fn: js_array_identifier_remove.name,
  select: js_find_declaration_named.name,
  select_args: ["gates"],
  args: ["examples_gate_run"],
  kind: "transform",
  title: "Retire one gate from the list that runs them",
  note: [
    "The undoing of ",
    { fn: js_array_identifier_add.name },
    ", and for a long time the missing half of it: a register of words could be ",
    "added to and taken from, a register of functions could only grow.",
    " ",
    "That gap fell on the one list that matters most. Retiring a gate is an ",
    "ordinary thing to want, and with no verb for it the change had to be made by ",
    "hand — which lands in the log under a message naming no command at all, in ",
    "the list the repo edits more often than any other.",
    " ",
    "It refuses a name the list does not hold rather than doing nothing quietly. ",
    "Afterwards the two outcomes look identical, and only one of them was meant.",
  ],
  before: `export function f() {
  let gates = [guard_gate_run, examples_gate_run, permission_gate_run];
  return gates;
}`,
  after: `export function f() {
  let gates = [guard_gate_run, permission_gate_run];
  return gates;
}`,
};
