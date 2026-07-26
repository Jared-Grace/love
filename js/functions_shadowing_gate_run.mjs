import { entries_names_text } from "./entries_names_text.mjs";
import { functions_shadowing_baseline_write } from "./functions_shadowing_baseline_write.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { functions_shadowing_versus_baseline } from "./functions_shadowing_versus_baseline.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
import { shadowing_baseline_read } from "./shadowing_baseline_read.mjs";
import { shadowing_entries_print } from "./shadowing_entries_print.mjs";
export async function functions_shadowing_gate_run() {
  "QA gate for the two name rules: a scope does not rebind a name a scope around it already binds, and a name belonging to a repo function keeps meaning that function. Both break the same way — pasted-in code brings its own declaration, and every line below it that reads the name now gets the pasted value instead. Two scopes side by side may reuse a name freely, since neither can see the other. Measured against the baseline file rather than against zero, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_shadowing();
  let known = await shadowing_baseline_read();
  let change = functions_shadowing_versus_baseline(offenders, known);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  shadowing_entries_print(added, "NEW    ");
  shadowing_entries_print(stale, "GONE   ");
  let any_added = greater_than(added.length, 0);
  if (any_added) {
    let message_added =
      "shadowing gate: " +
      added.length +
      " functions hide a name that was already in scope — rename the inner one, and if a line below it was reading the outer name, that line was the bug: " +
      entries_names_text(added);
    throw new Error(message_added);
  }
  let any_stale = greater_than(stale.length, 0);
  if (any_stale) {
    let message_stale =
      "shadowing gate: " +
      stale.length +
      " baseline entries no longer shadow anything — rerun " +
      functions_shadowing_baseline_write.name +
      " to shrink the baseline: " +
      entries_names_text(stale);
    throw new Error(message_stale);
  }
  let result = {
    added: 0,
    stale: 0,
  };
  return result;
}
