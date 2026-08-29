import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_is } from "./list_is.mjs";
export function app_g_bless_camera_people_get(container_map) {
  arguments_assert(arguments, 1);
  ("Who is walking about on this map, for a camera journey that has to hold them still -");
  ("and nobody at all when the map was never told.");
  ("An empty answer rather than a complaint. A map with no walkers on it is a real thing in");
  ("this game: the dev screens that show the celebration over plain ground draw houses and");
  ("no crowd. A journey over one of those has nobody to hold still, which is exactly what");
  ("an empty list says, and a journey that refused instead would break the screens that are");
  ("used to judge the very animation it is part of.");
  ("Asked as whether a list is there, rather than as whether the note is missing. A map that");
  ("was never told carries no such property at all, and a property that was never written is");
  ("not the same value as one written empty - so the question that answers both is what the");
  ("note IS, and a list is the only thing a journey can walk.");
  let element = html_component_element_get(container_map);
  let people = element.bless_camera_people;
  let told = list_is(people);
  if (told) {
    return people;
  }
  let nobody = [];
  return nobody;
}
