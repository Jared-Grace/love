import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add } from "./add.mjs";
export function list_index_of_add(list, item, delta) {
  arguments_assert(arguments, 3);
  ("The place an item sits in a list, moved along by so many places.");
  ("Putting a line after another line, moving one element to sit beside a");
  ("neighbour. Nobody knows the number they want to begin with - they know the");
  ("thing they want to stand next to, and how far along from it to land. Finding");
  ("where that thing sits and stepping off from there are one question, and the");
  ("place the neighbour itself sits is never what is wanted.");
  let found = list_index_of(list, item);
  let place = add(found, delta);
  return place;
}
