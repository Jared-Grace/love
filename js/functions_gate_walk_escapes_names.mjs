import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_walk_escapes } from "./functions_gate_walk_escapes.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_gate_walk_escapes_names() {
  "Just the names of the gates whose gathering walk a refusal can escape from, without the calls it would escape through.";
  "The ratchet measures a flat list of names against what the repo already carried, so it needs the names alone. The calls beside each one are for a reader deciding what to catch, and putting them in the record would make renaming a callee read as a new offense.";
  arguments_assert(arguments, 0);
  let offenders = await functions_gate_walk_escapes();
  let names = list_map(offenders, property_get_f_name);
  return names;
}
