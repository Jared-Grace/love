import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function property_negative(object, property_name) {
  arguments_assert(arguments, 2);
  ("The count a record holds under a name, with its sign turned around.");
  ("A sort puts the smallest first. Turning the sign around is how a list of");
  ("counts - how many times a word was used, how many commands a loop would have");
  ("saved, how many bytes a section runs to - comes back with the biggest first");
  ("instead, without a second kind of sort. Reaching in and turning the sign");
  ("around are one step: the count as it stands is never the answer here.");
  let count = property_get(object, property_name);
  let ordered = subtract(0, count);
  return ordered;
}
