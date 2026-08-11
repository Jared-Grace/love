import { functions_prose_sequence } from "./functions_prose_sequence.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
import { list_map } from "./list_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_prose_sequence_names() {
  arguments_assert(arguments, 0);
  ("Just the names of the functions explaining themselves where the reader that gathers explanations cannot see, without the hidden sentences themselves.");
  ("The ratchet measures a flat list of names against what the repo already carried, so it needs the names alone. The sentences beside each name are for a reader deciding which of the two shapes that function was meant to be, and putting them in the record would make editing a word of prose read as a new offense.");
  let offenders = await functions_prose_sequence();
  let names = list_map(offenders, property_get_f_name);
  return names;
}
