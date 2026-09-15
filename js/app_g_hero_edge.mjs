import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { bless_edge } from "./bless_edge.mjs";
export function app_g_hero_edge(hero) {
  arguments_assert(arguments, 1);
  ("The red arrow at the edge of the screen, aimed at the evil person while there is one. It hides itself when they can be seen, and when nobody is evil at all.");
  let evil = property_get(hero, "evil");
  let edge = property_get(hero, "edge");
  let container_map = property_get(hero, "container_map");
  let bar = property_get(hero, "bar");
  let people = list_filter_null_not_is([evil]);
  let view = bless_view_of_people(people);
  bless_edge(edge, container_map, bar, view);
}
