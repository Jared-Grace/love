import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
export function list_shuffle_take_map(list, count, lambda) {
  arguments_assert(arguments, 3);
  ("This many things picked out of the list at random, each turned into something");
  ("else.");
  ("Every set of practice questions is built this way - pick a few of the numbers or");
  ("words that could be asked about, then make a question out of each - and the");
  ("picked ones are never looked at on their own.");
  let taken = list_shuffle_take(list, count);
  let made = list_map(taken, lambda);
  return made;
}
