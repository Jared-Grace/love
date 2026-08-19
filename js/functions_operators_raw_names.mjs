import { arguments_assert } from "./arguments_assert.mjs";
import { each_async } from "./each_async.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_operators_raw_names() {
  "Just the names of the functions still writing a comparison or a sum as an operator, that the canonicalizing pass would still act on, with the operators found in each one dropped.";
  "The ratchet counts functions, not operators. Which symbols a raw function happens to spell changes with every edit to its body, so a record of those would go stale on work that never touched the offense; the name is the thing that either offends or does not.";
  "A function that has asked in writing to be left out of that pass is dropped here, because the pass declines it every time it is offered. Counted in, a newly declining function turns the gate red with nothing anybody can run to clear it: the repair reports it as still waiting, and the record is written never to bless a new name. That is not a standard being held, it is a gate that cannot be answered - a browser-serialized lambda lifted out of its parent did exactly this and sat red. The report next door still shows every one of them, which is where a person goes to read one and decide whether the request is still a good one.";
  arguments_assert(arguments, 0);
  let offenders = await functions_operators_raw();
  let names = list_map_property(offenders, "f_name");
  let repairable = [];
  async function lambda(name) {
    let declined = await function_auto_declined_is(name);
    if (declined) {
      return;
    }
    list_add(repairable, name);
  }
  await each_async(names, lambda);
  return repairable;
}
