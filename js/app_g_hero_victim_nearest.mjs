import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_first } from "./list_first.mjs";
export function app_g_hero_victim_nearest(npcs, evil) {
  arguments_assert(arguments, 2);
  ("The living person standing nearest the evil one, counted in squares across and down, or nobody when the evil one is all that is left.");
  function other_is(person) {
    let same = equal(person, evil);
    let other = not(same);
    return other;
  }
  let others = list_filter(npcs, other_is);
  let nobody = list_empty_is(others);
  if (nobody) {
    return null;
  }
  function apart(person) {
    let d = g_distance_taxicab(evil, person);
    return d;
  }
  list_sort_number_mapper(others, apart);
  let nearest = list_first(others);
  return nearest;
}
