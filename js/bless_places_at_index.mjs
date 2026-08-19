import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
export function bless_places_at_index(index) {
  arguments_assert(arguments, 1);
  ("Everywhere one person belongs - which household, which building, which block, all the");
  ("way up - worked out from nothing but their place in the line.");
  ("Belonging is DERIVED rather than stored, and that is what makes a world possible to");
  ("have without building it. Divide the line into threes and you have households; divide");
  ("the households into fours and you have buildings. Every rung is the one below it");
  ("divided again, so a person's whole address falls out of one number and a world of any");
  ("size needs no table written down anywhere.");
  ("This is also what makes a place ANSWERABLE. A prayer at the block rung has to know who");
  ("else is on that block, and here that is a question about arithmetic rather than a");
  ("search of the map - which matters, because a person walks and the ground they are");
  ("standing on changes while the block they live on does not.");
  ("The lowest rung is never divided, because a person contains nobody - they ARE the number");
  ("being divided. It is written down all the same, so that every rung has an answer of the");
  ("same shape and nothing reading an address ever has to special-case the bottom.");
  let rungs = bless_rungs();
  let sizes = bless_place_sizes();
  let places = {};
  let within = index;
  property_set(places, "person", within);
  function rung_place(rung) {
    let size = property_get_or_null(sizes, rung);
    let bottom = not(size);
    if (bottom) {
      return;
    }
    within = divide_floor(within, size);
    property_set(places, rung, within);
  }
  each(rungs, rung_place);
  return places;
}
