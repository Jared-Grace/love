import { arguments_assert } from "./arguments_assert.mjs";
import { functions_return_key_shapes_disagree } from "./functions_return_key_shapes_disagree.mjs";
import { functions_return_key_shapes_baseline_path } from "./functions_return_key_shapes_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { return_key_shapes_entries_print } from "./return_key_shapes_entries_print.mjs";
export async function functions_return_key_shapes_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate for one rule: every way out of a function offers the caller the same set of keys. A function answering with different words on different paths hands its callers a value that is there sometimes and missing at other times, and says nothing either way - so the failure surfaces far from the function, as a wrong answer rather than as an error.");
  ("The way in is almost always a rename. An entry written in the short form is one word doing two jobs, a local and the key that local is emitted under, so renaming the local renames the key too and every caller still asking for the old word reads nothing. Nothing throws and nothing fails to parse. Measured against the baseline file rather than against zero, because some of what is here is deliberate and a gate demanding zero would only be turned off; a function the baseline does not list fails, and one it lists that has since been made to agree fails too, so the list can only shrink.");
  let offenders = await functions_return_key_shapes_disagree();
  let path = functions_return_key_shapes_baseline_path();
  let fields = ["shapes"];
  let hint =
    "these functions hand back different sets of keys on different paths - make every way out spell the same words, and if a rename landed on a short-form entry the caller reading the old word was the bug";
  let name_write = fn_name("functions_return_key_shapes_baseline_write");
  let result = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    return_key_shapes_entries_print,
    hint,
    name_write,
  );
  return result;
}
