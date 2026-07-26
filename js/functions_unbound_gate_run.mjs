import { shadowing_entries_names_text } from "./shadowing_entries_names_text.mjs";
import { functions_unbound_baseline_write } from "./functions_unbound_baseline_write.mjs";
import { functions_unbound_names } from "./functions_unbound_names.mjs";
import { functions_unbound_versus_baseline } from "./functions_unbound_versus_baseline.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { unbound_baseline_read } from "./unbound_baseline_read.mjs";
import { unbound_entries_print } from "./unbound_entries_print.mjs";
export async function functions_unbound_gate_run() {
  "QA gate for the other half of the free-name question: a name that is read, binds to nothing, and names no repo function either. Its sibling gate catches the free name that does name a function, which is a missing import; this one catches the free name that names nothing at all, which is a guaranteed error the moment the line runs. Measured against the baseline file rather than against zero, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_unbound_names();
  let known = await unbound_baseline_read();
  let change = functions_unbound_versus_baseline(offenders, known);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  unbound_entries_print(added, "NEW    ");
  unbound_entries_print(stale, "GONE   ");
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    let message_added =
      "unbound gate: " +
      added.length +
      " functions read a name that nothing binds and no function answers to - bind it, correct the spelling, or delete the line: " +
      shadowing_entries_names_text(added);
    throw new Error(message_added);
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    let message_stale =
      "unbound gate: " +
      stale.length +
      " baseline entries are bound now - rerun " +
      functions_unbound_baseline_write.name +
      " to shrink the baseline: " +
      shadowing_entries_names_text(stale);
    throw new Error(message_stale);
  }
  let result = {
    added: 0,
    stale: 0,
  };
  return result;
}
