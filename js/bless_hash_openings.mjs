import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_street_openings } from "./bless_hash_street_openings.mjs";
import { bless_hash_map } from "./bless_hash_map.mjs";
import { list_concat } from "./list_concat.mjs";
export function bless_hash_openings() {
  arguments_assert(arguments, 0);
  ("Every word after the hash mark that hands the player the real game with the world set up a particular way, rather than drawing a screen over the top of it.");
  ("It is the street openings and the map, and the two are listed apart because what is true of one family is not true of the other. A street opening puts the player straight onto the pavement with the prayer panel over each person taken out of the way, and everything asked of one of them is asked of all of them. The map changes the distance and nothing else: every panel still appears, and only the size a tile is drawn at is different.");
  ("So they are gathered HERE rather than by adding the map to the street list, which would have been one line and would have quietly taken the panels away with it - the very thing the map is meant to leave alone.");
  ("What every opening DOES have in common is that it comes past the door prayer, and that is asked of this whole list rather than of either family. Somebody who typed a word after a hash mark came to work on the street and will reload, and the prayer at the door is the one thing on this screen that must not be said carelessly forty times.");
  ("What this list is for besides that is the directory, which needs every word a reader can type in one place. Asked of the families instead, a new family would be a word nothing linked to, and an opening nobody can find is an opening that does not exist.");
  let street = bless_hash_street_openings();
  let map = bless_hash_map();
  let openings = list_concat(street, [map]);
  return openings;
}
