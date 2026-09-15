import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_hero_evil_hunt } from "./app_g_hero_evil_hunt.mjs";
export function app_g_hero_evil_spawn(hero) {
  arguments_assert(arguments, 1);
  ("One person out of the crowd turns evil. There is only ever one at a time, so this is asked only when nobody is.");
  ("They are held out of the crowd's ordinary wandering, because from now on where they walk is decided by whoever they are hunting.");
  ("Nothing marks them yet. They look like everybody else until they have killed somebody.");
  let npcs = property_path_get_2(hero, "world", "npcs");
  let lonely = list_size_less_than_value(npcs, 2);
  if (lonely) {
    return;
  }
  let evil = list_random_item(npcs);
  property_set(evil, "held_still", "evil");
  property_set(evil, "burning", false);
  property_set(hero, "evil", evil);
  app_g_hero_evil_hunt(hero, evil);
}
