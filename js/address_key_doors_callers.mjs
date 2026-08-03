import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_doors } from "./hash_key_doors.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function address_key_doors_callers() {
  "Every function that calls a door onto the address of a page, kept beside the door it calls, as {caller, door}. Read-only.";
  "The pair rather than the name alone, so an answer says which door was reached rather than only that one was. The doors differ in what they do with the field - one stores it and a value, one reads the address and writes it back, one only reads - and a reader of an offender wants to know which.";
  "It is the population every question about these doors is asked of, so it is worth having on its own: a walk that stopped reaching callers would make every such question answer nothing, and nothing is exactly what a repo in order answers.";
  arguments_assert(arguments, 0);
  let doors = address_key_doors();
  let identifiers = await data_identifiers_get();
  let pairs = [];
  for (let door of doors) {
    let callers = property_or_null(identifiers, door);
    let uncalled = null_is(callers);
    if (uncalled) {
      continue;
    }
    for (let caller of callers) {
      let itself = equal(caller, door);
      if (itself) {
        continue;
      }
      let pair = {
        caller,
        door,
      };
      list_add(pairs, pair);
    }
  }
  return pairs;
}
