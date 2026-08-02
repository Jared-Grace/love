import { shadowing_baseline_path } from "./shadowing_baseline_path.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { shadowing_entries_print } from "./shadowing_entries_print.mjs";
export async function functions_shadowing_gate_run() {
  "QA gate for the two name rules: a scope does not rebind a name a scope around it already binds, and a name belonging to a repo function keeps meaning that function. Both break the same way — pasted-in code brings its own declaration, and every line below it that reads the name now gets the pasted value instead. Two scopes side by side may reuse a name freely, since neither can see the other. Measured against the baseline file rather than against zero, so the rule binds new code today; a name the baseline does not list fails, and a name it lists that no longer happens fails too, so the list can only shrink.";
  let offenders = await functions_shadowing();
  let path = shadowing_baseline_path();
  let fields = ["shadows_outer", "shadows_function"];
  let hint =
    "these functions hide a name that was already in scope - rename the inner one, and if a line below it was reading the outer name, that line was the bug";
  let name_write = fn_name("functions_shadowing_baseline_write");
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    shadowing_entries_print,
    hint,
    name_write,
  );
  return result;
}
