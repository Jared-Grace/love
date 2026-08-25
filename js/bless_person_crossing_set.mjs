import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bless_person_crossing_set(person) {
  arguments_assert(arguments, 1);
  ("Remember the square this person is stepping OFF, before the step writes the square they");
  ("are stepping onto over it.");
  ("A person's square is written the moment their step begins, so from then until they");
  ("arrive it names where they are going and not where they are. That single fact is behind");
  ("every complaint about this street: a mark drawn from it landed a tile ahead, and a tap");
  ("matched against it missed the person the player could plainly see and hit nobody.");
  ("Both squares are true while a step is under way, because the person is BETWEEN them -");
  ("their picture covers part of each. Keeping the one being left is what lets anything ask");
  ("about a walking person and get an answer that matches what is on the screen.");
  ("Called before the move rather than by it, because only this game reads the answer. The");
  ("mover is shared with every other game on this map, and a record nobody clears is a lie");
  ("sitting on a person for the rest of the game.");
  let x = property_get(person, "x");
  let y = property_get(person, "y");
  let crossing = {
    x: x,
    y: y,
  };
  property_set(person, "crossing", crossing);
}
