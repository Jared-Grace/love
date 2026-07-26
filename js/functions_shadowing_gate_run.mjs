import { functions_shadowing } from "./functions_shadowing.mjs";
import { functions_shadowing_versus_baseline } from "./functions_shadowing_versus_baseline.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { shadowing_baseline_read } from "./shadowing_baseline_read.mjs";
import { shadowing_entries_print } from "./shadowing_entries_print.mjs";
export async function functions_shadowing_gate_run() {
  "QA gate for the two name rules: inside one file a name is bound once, and a name that belongs to a repo function means that function. Both break the same way — code pasted in brings its own declaration, and every line below it that reads the name now gets the pasted value instead. Measured against data/shadowing_baseline.json, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_shadowing();
  let known = await shadowing_baseline_read();
  let change = functions_shadowing_versus_baseline(offenders, known);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  shadowing_entries_print(added, "NEW    ");
  shadowing_entries_print(stale, "GONE   ");
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    let message =
      "shadowing gate: " +
      added.length +
      " functions bind a name that shadows another — rename the inner one, or if it was meant to be the outer name, that is the bug";
    throw new Error(message);
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    let message =
      "shadowing gate: " +
      stale.length +
      " baseline entries no longer shadow anything — rerun " +
      "functions_shadowing_baseline_write" +
      " to shrink data/shadowing_baseline.json";
    throw new Error(message);
  }
  let result = {
    added: 0,
    stale: 0,
  };
  return result;
}
