import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_return_key_shapes_disagree } from "./functions_return_key_shapes_disagree.mjs";
import { property_get } from "./property_get.mjs";
import { functions_return_key_shapes_baseline_path } from "./functions_return_key_shapes_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_entries_gate_generic } from "./baseline_entries_gate_generic.mjs";
import { return_key_shapes_entries_print } from "./return_key_shapes_entries_print.mjs";
export async function functions_return_key_shapes_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate for one rule: every way out of a function offers the caller the same set of keys. A function answering with different words on different paths hands its callers a value that is there sometimes and missing at other times, and says nothing either way - so the failure surfaces far from the function, as a wrong answer rather than as an error.");
  ("The way in is almost always a rename. An entry written in the short form is one word doing two jobs, a local and the key that local is emitted under, so renaming the local renames the key too and every caller still asking for the old word reads nothing. Nothing throws and nothing fails to parse. Measured against the baseline file rather than against zero, because some of what is here is deliberate and a gate demanding zero would only be turned off; a function the baseline does not list fails, and one it lists that has since been made to agree fails too, so the list can only shrink.");
  ("HOW MANY FUNCTIONS WERE READ TRAVELS OUT WITH THE VERDICT, TAKEN FROM THE SWEEP RATHER THAN COUNTED AGAIN HERE. What the shared ratchet hands back is a nought and a nought, which is true of every run that passes and so can never fall - a sweep pointed at a list of names that has moved would go on answering clean for good, and nobody would be told. The count is the only part of this answer that can drop.");
  let walked = await functions_return_key_shapes_disagree();
  let functions = property_get(walked, "functions");
  let offenders = property_get(walked, "offenders");
  let path = functions_return_key_shapes_baseline_path();
  let fields = ["shapes"];
  let hint = text_combine_multiple([
    "these functions hand back different sets of keys on different paths - make every way out spell the same words, and if a rename landed on a short-form entry the caller reading the old word was the bug. one command mends one of these: ",
    fn_name("function_return_key_shapes_agree"),
    " names in each record the keys the other records carry, each holding nothing",
  ]);
  let name_write = fn_name("functions_return_key_shapes_baseline_write");
  let told = await baseline_entries_gate_generic(
    offenders,
    path,
    fields,
    return_key_shapes_entries_print,
    hint,
    name_write,
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let result = {
    functions,
    added,
    stale,
  };
  return result;
}
