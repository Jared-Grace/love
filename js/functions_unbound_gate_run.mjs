import { unbound_baseline_path } from "./unbound_baseline_path.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_unbound_names } from "./functions_unbound_names.mjs";
import { unbound_entries_print } from "./unbound_entries_print.mjs";
export async function functions_unbound_gate_run() {
  "QA gate for the other half of the free-name question: a name that is read, binds to nothing, and names no repo function either. Its sibling gate catches the free name that does name a function, which is a missing import; this one catches the free name that names nothing at all, which is a guaranteed error the moment the line runs. Measured against the baseline file rather than against zero, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_unbound_names();
  let path = unbound_baseline_path();
  let fields = ["unbound"];
  let hint =
    "these functions read a name that nothing binds and no function answers to - bind it, correct the spelling, or delete the line";
  let name_write = fn_name("functions_unbound_baseline_write");
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    unbound_entries_print,
    hint,
    name_write,
  );
  return result;
}
