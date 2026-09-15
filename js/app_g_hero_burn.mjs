import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_g_hero_burn_charge } from "./app_g_hero_burn_charge.mjs";
import { app_g_hero_fx_point } from "./app_g_hero_fx_point.mjs";
import { app_g_hero_fireball } from "./app_g_hero_fireball.mjs";
import { app_g_hero_impact } from "./app_g_hero_impact.mjs";
import { app_g_hero_engulf } from "./app_g_hero_engulf.mjs";
import { app_g_hero_ash } from "./app_g_hero_ash.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { app_g_hero_evil_spawn } from "./app_g_hero_evil_spawn.mjs";
import { app_g_hero_evil_spawn_wait_ms } from "./app_g_hero_evil_spawn_wait_ms.mjs";
export async function app_g_hero_burn(hero) {
  arguments_assert(arguments, 1);
  ("The player stops the evil person with fire, in five acts: she gathers the fire, throws it, it strikes, it engulfs them, and they are burned to ash.");
  ("They stop hunting the moment the fire is called, not when it lands, so the one the fireball was aimed at is still standing there when it arrives.");
  ("Once it is over nobody is evil, and a little while later somebody else in the crowd turns.");
  let evil = property_get(hero, "evil");
  let fx = property_get(hero, "fx");
  let player_img_c = property_get(hero, "player_img_c");
  let world = property_get(hero, "world");
  let npcs = property_get(world, "npcs");
  let render = property_get(hero, "render");
  property_set(evil, "burning", true);
  let evil_img = app_shared_game_npc_img_get(evil);
  await app_g_hero_burn_charge(player_img_c);
  let from = app_g_hero_fx_point(fx, player_img_c);
  let to = app_g_hero_fx_point(fx, evil_img);
  await app_g_hero_fireball(fx, from, to);
  app_g_hero_impact(hero, to);
  await app_g_hero_engulf(hero, to, evil_img);
  await app_g_hero_ash(hero, to, evil);
  list_remove_if_exists(npcs, evil);
  property_set(hero, "evil", null);
  render();
  function spawned() {
    app_g_hero_evil_spawn(hero);
  }
  let wait = app_g_hero_evil_spawn_wait_ms();
  setTimeout(spawned, wait);
}
