import { js_array_identifier_add } from "../../js/js_array_identifier_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_add } from "../../js/js_array_text_add.mjs";
export const example = {
  fn: js_array_identifier_add.name,
  select: js_find_declaration_named.name,
  select_args: ["gates"],
  args: ["examples_data_gate_run"],
  kind: "transform",
  title: "Add one name to an ordered register of functions",
  note: [
    "The registers that decide what runs hold the functions themselves, not their ",
    "names, because something reads the list and calls what is in it. ",
    { fn: js_array_text_add.name },
    " is the twin for the other kind — a reading order, a run of groups — and ",
    "reaching for it here is the mistake this verb exists to remove.",
    " ",
    "It is worth saying what that mistake looks like, because it does not look ",
    "like one. A written word dropped into a list of functions is rewritten by ",
    "the auto pass into ",
    { code: "the name-of form" },
    ", so the line ends up reading like every line around it, sitting in the list ",
    "as though it were a live entry — and running nothing at all, in the one kind ",
    "of list whose whole job is to run what it holds. Adding the gate below by ",
    "hand is what caught it.",
  ],
  before: `export function f() {
  let gates = [guard_gate_run, examples_gate_run];
  return gates;
}`,
  after: `export function f() {
  let gates = [guard_gate_run, examples_gate_run, examples_data_gate_run];
  return gates;
}`,
};
