import { functions_parameters_unread } from "./functions_parameters_unread.mjs";
import { parameters_unread_baseline_path } from "./parameters_unread_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { parameters_unread_entries_print } from "./parameters_unread_entries_print.mjs";
export async function functions_parameters_unread_gate_run() {
  "QA gate for a function asking for a value its own body never reads. Every call site is then written as though handing that value over does something, so the code reads as having a behaviour it does not have - one such pair sat in front of the search app looking like an english fallback that was never there. Measured against the baseline file rather than against zero, so the rule binds new code today; a parameter the baseline does not list fails, and one it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_parameters_unread();
  let path = parameters_unread_baseline_path();
  let fields = ["unread"];
  let hint =
    "nothing reads these parameters - either the body was meant to use them and does not, which is the bug, or they should come off the declaration and off every call site";
  let name_write = fn_name("functions_parameters_unread_baseline_write");
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    parameters_unread_entries_print,
    hint,
    name_write,
  );
  return result;
}
