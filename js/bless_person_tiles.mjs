import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export function bless_person_tiles(person) {
  arguments_assert(arguments, 1);
  ("Every square this person is on - the one they are standing on, and the one they are");
  ("still crossing off if a step is under way.");
  ("Standing still that is one square. Mid-step it is two, and both of them are honest: the");
  ("person is between the squares, with part of their picture on each. Asking for the list");
  ("rather than for the square is what lets a caller be right about a walking person without");
  ("having to know that walking is a thing that takes time.");
  ("Two squares is not two people. Everything asking this asks a yes-or-no question about");
  ("one person - can I see them, did the player tap them - so the answer is the same whether");
  ("it comes from one square or the other, and no caller has to choose between them.");
  let x = property_get(person, "x");
  let y = property_get(person, "y");
  let here = {
    x: x,
    y: y,
  };
  let crossing = property_get_or_null(person, "crossing");
  let both = [here, crossing];
  let tiles = list_filter_null_not_is(both);
  return tiles;
}
