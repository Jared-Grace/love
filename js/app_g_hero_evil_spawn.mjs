import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_hero_evil_hunt } from "./app_g_hero_evil_hunt.mjs";
export function app_g_hero_evil_spawn(hero) {
  arguments_assert(arguments, 1);
  ("One person out of the crowd turns evil. There is only ever one at a time, so this is asked only when nobody is.");
  ("They are held out of the crowd's ordinary wandering, because from now on where they walk is decided by whoever they are hunting.");
  ("Nothing marks them yet. They look like everybody else until they have killed somebody.");
  let world = property_get(hero, "world");
  let npcs = property_get(world, "npcs");
  let count = list_size(npcs);
  let lonely = less_than(count, 2);
  if (lonely) {
    return;
  }
  let evil = list_random_item(npcs);
  property_set(evil, "held_still", "evil");
  property_set(evil, "burning", false);
  property_set(hero, "evil", evil);
  app_g_hero_evil_hunt(hero, evil);
}
