import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
export function bless_view_person_at(view, x, y) {
  arguments_assert(arguments, 3);
  ("Who the player has just tapped - the person standing on that square, if they can see");
  ("them.");
  ("Asked of the VIEW and never of the whole crowd, and that one word is the game's whole");
  ("cost. A player may only pray for somebody they are looking at, so a tap on a person");
  ("behind them finds nobody here and becomes a walk toward them instead - which is the");
  ("same wish answered the way this game answers it.");
  ("Nobody there is the ordinary answer rather than a fault. Most of the ground is empty,");
  ("and a tap on empty ground is how the player walks.");
  let people = bless_view_people(view);
  function person_here(someone) {
    let px = property_get(someone, "x");
    let py = property_get(someone, "y");
    let left = equal(px, x);
    let right = equal(py, y);
    let here = and(left, right);
    return here;
  }
  let standing = list_filter(people, person_here);
  ("the first of them rather than the only one, because two people can share a square while");
  ("one walks through the other, and a tap in that moment should reach somebody rather than");
  ("refuse to choose");
  let person = list_get_or_null(standing, 0);
  return person;
}
