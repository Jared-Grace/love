import { arguments_assert } from "./arguments_assert.mjs";
import { functions_rewrite_then_read } from "./functions_rewrite_then_read.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_rewrite_then_read_names() {
  arguments_assert(arguments, 0);
  ("The names alone of the functions that write a named function out again and then, in the same run, ask something that reads it.");
  ("A RATCHET IS MEASURED AGAINST A FLAT LIST OF NAMES, so the pairings that say why are stripped off here rather than at the gate. They are what a reader needs in order to act, and they are exactly what must not be written into a baseline: a pairing changes whenever either side is edited, and a baseline that moved for reasons of its own would go red without anything having gone wrong.");
  ("Ask the fuller reading next door for the pairings themselves when a name here has to be acted on.");
  let offenders = await functions_rewrite_then_read();
  let names = list_map_property(offenders, "f_name");
  return names;
}
