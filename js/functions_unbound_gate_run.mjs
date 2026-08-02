import { fn_name } from "./fn_name.mjs";
import { entries_names_text } from "./entries_names_text.mjs";
import { functions_unbound_names } from "./functions_unbound_names.mjs";
import { functions_unbound_versus_baseline } from "./functions_unbound_versus_baseline.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { unbound_baseline_read } from "./unbound_baseline_read.mjs";
import { unbound_entries_print } from "./unbound_entries_print.mjs";
export async function functions_unbound_gate_run() {
  "QA gate for the other half of the free-name question: a name that is read, binds to nothing, and names no repo function either. Its sibling gate catches the free name that does name a function, which is a missing import; this one catches the free name that names nothing at all, which is a guaranteed error the moment the line runs. Measured against the baseline file rather than against zero, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_unbound_names();
  let path = unbound_baseline_path();
  let fields = ["unbound"];
  let hint =
    "these functions read a name that nothing binds and no function answers to - bind it, correct the spelling, or delete the line";
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    unbound_entries_print,
    hint,
    fn_name("functions_unbound_baseline_write"),
  );
  return result;
}
