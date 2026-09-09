import { arguments_assert } from "./arguments_assert.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export function list_tally_surplus(list, list_other) {
  arguments_assert(arguments, 2);
  ("$plain list");
  ("$plain list_other");
  ("The values the first list holds more often than the second holds them, each written out as many times as it is held over.");
  ("COUNTING RATHER THAN MEMBERSHIP IS THE WHOLE OF IT. A passage saying holy three times and a passage saying it twice are not the same passage, and an answer that only said which values appeared would call them the same. Written out repeated, the answer says how much is over as well as what is over.");
  ("Order is not looked at. Two writings of one thing may put the same values in different places for honest reasons, and a reader asking whether anything was added or lost is asking about the values rather than about where they stand.");
  ("The second list is tallied once and spent as the first is walked, so a value held twice over is answered twice and not once. Tallying both and subtracting would have said the same thing about how many, and would have had to be told separately how many times to write each one out.");
  let held = list_tally(list_other);
  let surplus = [];
  for (let value of list) {
    let count = property_get_or(held, value, 0);
    let spare = greater_than(count, 0);
    if (spare) {
      let left = subtract(count, 1);
      property_set(held, value, left);
      continue;
    }
    list_add(surplus, value);
  }
  return surplus;
}
