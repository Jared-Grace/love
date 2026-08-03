import { functions_unreachable_statements } from "./functions_unreachable_statements.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_unreachable_statements_names() {
  "Just the names of the functions holding work that never runs, without the code of it.";
  "The ratchet measures a flat list of names against what the repo already carried, so it needs the names alone; the code beside each one is for a reader deciding what to do, and putting it in the record would make every edit to a dead line read as a new offense.";
  let offenders = await functions_unreachable_statements();
  let names = list_map(offenders, property_get_f_name);
  return names;
}
