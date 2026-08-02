import { arguments_assert } from "./arguments_assert.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_operators_raw_names() {
  "Just the names of the functions still writing a comparison or a sum as an operator, with the operators found in each one dropped.";
  "The ratchet counts functions, not operators. Which symbols a raw function happens to spell changes with every edit to its body, so a record of those would go stale on work that never touched the offense; the name is the thing that either offends or does not.";
  arguments_assert(arguments, 0);
  let offenders = await functions_operators_raw();
  let names = list_map_property(offenders, "f_name");
  return names;
}
