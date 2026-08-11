import { functions_new_baseline_ratchet_gate_new } from "./functions_new_baseline_ratchet_gate_new.mjs";
import { functions_new_baseline_ratchet_write_new } from "./functions_new_baseline_ratchet_write_new.mjs";
import { functions_new_baseline_ratchet_growth_new } from "./functions_new_baseline_ratchet_growth_new.mjs";
import { functions_new_baseline_ratchet_path_new } from "./functions_new_baseline_ratchet_path_new.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { function_list_name_add } from "./function_list_name_add.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_new_baseline_ratchet(lister, slug, hint) {
  "Writes a whole shrink-only ratchet from the one function that lists what offends - the four functions around it, the record it holds, and its place in the list of gates - and leaves nothing to finish by hand.";
  "A ratchet is the repo's answer to a fault it already carries: it cannot demand nought today, so it records what is there and refuses one more. Twenty-five of them are written here, and every one of them cost four near-identical files after the interesting part was already done. The interesting part is the listing - what counts as an offence - and that is the one thing this asks for.";
  "The four are separate on purpose and stay separate. Where the record lives is one function because three others read it; refusing to grow it is its own function because the writer must not be able to decide that for itself; the writer and the gate are separate because one is run by hand after a repair and the other is run by everybody, always.";
  "It seeds the record before it finishes, so the repo it leaves is green. A gate that arrives red is a gate every other Claude in this directory meets as a broken build they did not cause.";
  "It joins the list of gates too, because a gate that is not in that list is not run, and there is already a gate that fails on exactly that omission. Writing the four files and stopping would leave the build red in a second way.";
  "The name it is given is read as a name and refused if it is anything more, and the function that does the listing is checked against the functions that exist. What it writes is shaped from those two words and from nothing a caller hands over as code.";
  arguments_assert(arguments, 3);
  await function_exists_assert(lister);
  js_identifier_expression(lister);
  js_identifier_expression(slug);
  let name_path = text_combine(slug, "_baseline_path");
  let name_growth = text_combine(slug, "_baseline_growth_assert");
  let name_write = text_combine(slug, "_baseline_write");
  let name_gate = text_combine(slug, "_gate_run");
  let file = text_combine_3("data/", slug, "_baseline.json");
  await functions_new_baseline_ratchet_path_new(file, name_path);
  await functions_new_baseline_ratchet_growth_new(name_path, hint, name_growth);
  await functions_new_baseline_ratchet_write_new(
    lister,
    name_growth,
    name_path,
    name_write,
  );
  await functions_new_baseline_ratchet_gate_new(
    lister,
    name_path,
    name_write,
    hint,
    name_gate,
  );
  await function_run_args_none(name_write);
  let f_name = fn_name("qa_gates");
  await function_list_name_add(f_name, name_gate);
  let r = {
    lister,
    path: name_path,
    growth_assert: name_growth,
    write: name_write,
    gate_run: name_gate,
    baseline: file,
  };
  return r;
}
