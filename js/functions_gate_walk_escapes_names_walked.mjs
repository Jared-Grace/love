import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_walk_escapes } from "./functions_gate_walk_escapes.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_gate_walk_escapes_names_walked() {
  "Just the names of the gates whose gathering walk a refusal can escape from, beside how many functions were walked to find them.";
  "The ratchet measures a flat list of names against what the repo already carried, so it needs the names alone. The calls beside each one are for a reader deciding what to catch, and putting them in the record would make renaming a callee read as a new offense.";
  "The count travels with the names because both readers of this one need it: the gate has to say how much it reached, and a seeding that reached nothing must not be allowed to record nothing as good news.";
  arguments_assert(arguments, 0);
  let found = await functions_gate_walk_escapes();
  let gates = property_get(found, "gates");
  let walked = property_get(found, "walked");
  let names = list_map(gates, property_get_f_name);
  let r = {
    names,
    walked,
  };
  return r;
}
