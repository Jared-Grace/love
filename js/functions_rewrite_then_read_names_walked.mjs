import { arguments_assert } from "./arguments_assert.mjs";
import { functions_rewrite_then_read } from "./functions_rewrite_then_read.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_rewrite_then_read_names_walked() {
  "The names alone of the functions that write a named function out again and then, in the same run, ask something that reads it - said beside how many candidates were opened.";
  "A RATCHET IS MEASURED AGAINST A FLAT LIST OF NAMES, so the pairings that say why are stripped off here rather than at the gate. They are what a reader needs in order to act, and they are exactly what must not be written into a baseline: a pairing changes whenever either side is edited, and a baseline that moved for reasons of its own would go red without anything having gone wrong.";
  "The count is carried through untouched rather than worked out again from the names, because the names are the offenders and a number made out of offenders is nothing on every run that passes - which is the whole reason the count was asked for.";
  arguments_assert(arguments, 0);
  let told = await functions_rewrite_then_read();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let names = list_map_property(offenders, "f_name");
  let r = {
    walked,
    names,
  };
  return r;
}
