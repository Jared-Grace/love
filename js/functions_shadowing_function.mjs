import { functions_shadowing } from "./functions_shadowing.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function functions_shadowing_function() {
  ("Every place a local wears the name of a function this repo already has. The");
  ("other kind of hiding puts a name over an enclosing binding, which costs a");
  ("reader who follows the wrong one; this kind costs the next line anybody");
  ("writes, because the word is bound before the import is even looked at.");
  ("It is the near neighbour of the set the auto pass writes into code, and it");
  ("fails the same way for the same reason - a call that reads as reaching the");
  ("repo and reaches a local instead. The difference is only which names, so the");
  ("wider set is worth holding at the same zero the narrow one is held at.");
  let offenders = await functions_shadowing();
  let found = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let over_function = property_get(offender, "shadows_function");
    let none = list_empty_is(over_function);
    let any = not(none);
    if (any) {
      let finding = {
        name: f_name,
        hides: over_function,
      };
      list_add(found, finding);
    }
  }
  return found;
}
