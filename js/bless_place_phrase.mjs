import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_place_phrase(place) {
  arguments_assert(arguments, 1);
  ("How a place is named inside the prayer - on this street, in this city.");
  ("English does not use one word for all of them: you are ON a street, ON a block and ON a");
  ("continent, but IN a city and IN the world. A rule that took the commonest of those and");
  ("applied it everywhere would come out wrong at exactly the moment the player is reading");
  ("the words aloud, so the ones that differ are named here instead of derived.");
  ("'this' rather than 'the' throughout, because the player is standing in it. Praying for");
  ("this street is intercession; praying for the street is a subject.");
  let inside = ["city", "world"];
  let within = list_includes(inside, place);
  if (within) {
    let held = text_combine("in this ", place);
    return held;
  }
  let upon = text_combine("on this ", place);
  return upon;
}
