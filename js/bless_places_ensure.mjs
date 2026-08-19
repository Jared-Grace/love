import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { property_set } from "./property_set.mjs";
import { bless_places_at_index } from "./bless_places_at_index.mjs";
export function bless_places_ensure(people) {
  arguments_assert(arguments, 1);
  ("Give everybody in the world somewhere to belong, before anybody is prayed for.");
  ("Their position in the line IS their address, so this has to happen while that line is");
  ("still the one the world was made from. Sort the crowd afterwards, or let somebody walk");
  ("first, and the same person comes out living somewhere else.");
  ("Written onto the person rather than kept in a table beside them, because the prayer");
  ("reaches a place THROUGH the person: the game is always holding somebody the player is");
  ("looking at, and it must be able to ask where they belong without looking anything up.");
  function person_place(person, index) {
    let places = bless_places_at_index(index);
    property_set(person, "places", places);
  }
  each_index(people, person_place);
}
