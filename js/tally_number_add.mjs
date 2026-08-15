import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
export function tally_number_add(tally, name, number) {
  "Adds a number to the running total kept under one name, and hands back the same tally.";
  "The counting twin beside this one adds one for every value it is shown, which answers how OFTEN. This answers how MUCH, and the two come apart wherever the things being counted are not the same size. A path touched in four hundred commits and a path touched once can weigh the same, and only the weight says whether removing either is worth anything.";
  "A name not yet held starts at nothing rather than being an error, so a caller pouring a long run of readings in never has to ask first whether it has seen this one.";
  arguments_assert(arguments, 3);
  let seen = tally[name];
  let already = seen ? seen : 0;
  tally[name] = add(already, number);
  return tally;
}
