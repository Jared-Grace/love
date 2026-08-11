import { functions_calls_unawaited } from "./functions_calls_unawaited.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_calls_unawaited_names() {
  "Just the names of the functions holding a call nothing waits for, without the calls themselves.";
  "The ratchet measures a flat list of names against what the repo already carried, so it needs the names alone; the calls beside each one are for a reader deciding what to do, and putting them in the record would make renaming an argument read as a new offense.";
  let offenders = await functions_calls_unawaited();
  let names = list_map(offenders, property_get_f_name);
  return names;
}
