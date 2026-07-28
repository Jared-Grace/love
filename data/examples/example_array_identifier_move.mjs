import { js_array_identifier_move } from "../../js/js_array_identifier_move.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_array_text_move } from "../../js/js_array_text_move.mjs";
export const example = {
  fn: js_array_identifier_move.name,
  select: js_find_declaration_named.name,
  select_args: ["gates"],
  args: ["permission_gate_run", "guard_gate_run"],
  kind: "transform",
  title: "Reorder a register without taking anything out of it",
  note: [
    "Taking an entry out and putting it back somewhere else says one thing in two ",
    "commands, and reads afterwards as two changes a reader has to hold together ",
    "to see the single one that happened. Worse, between them the register is ",
    "short an entry — a state nobody wants and a peer's sweep can commit.",
    " ",
    "The place is named by its neighbour rather than counted. A count is wrong the ",
    "moment anybody inserts above it and nothing says so; a neighbour is either ",
    "still there or the command refuses.",
    " ",
    "Both names are looked up before anything moves, so a wrong neighbour refuses ",
    "against the list you meant rather than against one already half-changed. It ",
    "also refuses moving a name to sit after itself.",
    " ",
    { fn: js_array_text_move.name },
    " is the same move in a register of written words; the two share the moving ",
    "itself and differ only in how an entry is found.",
  ],
  before: `export function f() {
  let gates = [guard_gate_run, examples_gate_run, permission_gate_run];
  return gates;
}`,
  after: `export function f() {
  let gates = [guard_gate_run, permission_gate_run, examples_gate_run];
  return gates;
}`,
};
