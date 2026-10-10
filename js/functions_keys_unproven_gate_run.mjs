import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_keys_unproven } from "./functions_keys_unproven.mjs";
import { functions_keys_unproven_baseline_path } from "./functions_keys_unproven_baseline_path.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { keys_unproven_entries_print } from "./keys_unproven_entries_print.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_keys_unproven_gate_run() {
  "QA gate for keys that reach a record by brackets unproven. A key like constructor or __proto__ reaches the language's own machinery instead of the record's data; the core accessors refuse those as they run, and brackets written straight into a body step around them. Measured against the baseline rather than against zero, so new code proves its keys today; a key the baseline does not list fails, and a listed key that is gone fails too, so the list can only shrink.";
  "What keeps lesson code safe to edit without asking: a function off this list reaches no record with a word it did not prove.";
  let offenders = await functions_keys_unproven();
  let path = functions_keys_unproven_baseline_path();
  let fields = ["keys"];
  let hint = text_combine_multiple([
    "these functions reach a record by brackets with a key their code does not prove safe - check it with ",
    fn_name("property_name_internal_not_assert"),
    " first, or reach the record through ",
    fn_name("property_get"),
    " / ",
    fn_name("property_set"),
  ]);
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    keys_unproven_entries_print,
    hint,
    fn_name("functions_keys_unproven_baseline_write"),
  );
  return result;
}
