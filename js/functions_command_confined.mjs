import { fn_name } from "./fn_name.mjs";
export function functions_command_confined() {
  "The functions that reach a command runner or an evaluator but decide for themselves what it may do, so no argument handed to them can make it do anything else. A walk looking for danger stops at each of these rather than going through, because what lies beyond has already been fenced.";
  ("Each name here carries a proof, and the proof is the price of the entry. The confined evaluator runs a program only when ",
    fn_name("js_code_confined_refusals"),
    " finds nothing: no name outside a short list of plain helpers, no property that reaches the language's own machinery, no this, no import, no with, no key it cannot prove - so the program can touch nothing but its own values and the console it is handed, and ",
    fn_name("js_code_confined_cases_gate_run"),
    " keeps the escapes that were tried refused. The editor opener refuses a path holding a double quote and makes every path whole from the root, and the runner splits by its own rule, refuses every shell operator, and spawns no shell - so the path stays one argument that cannot start with a dash, and the editor can only open it.");
  ("Spelled rather than imported, for the reason the deleter roster gives: an import would give every checker consulting this list an edge to the runners themselves.");
  let names = [
    fn_name("eval_console_log_confined"),
    fn_name("file_open_editor"),
  ];
  return names;
}
