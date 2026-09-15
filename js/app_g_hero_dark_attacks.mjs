import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_g_hero_seen_is } from "./app_g_hero_seen_is.mjs";
import { app_g_hero_dark_attack } from "./app_g_hero_dark_attack.mjs";
import { random_range } from "./random_range.mjs";
export function app_g_hero_dark_attacks(hero, evil) {
  arguments_assert(arguments, 2);
  ("The killer throws dark power at the player every few seconds, for as long as they live, whenever both of them are on the screen.");
  ("Both must be seen, because a blast from somebody the player cannot see, or at a player scrolled out of view, is a sight nobody is shown. Nothing is thrown while the player's own fire is on its way, so the two never cross.");
  ("Each wait is asked for as the throw before it ends rather than by a loop, so starting the attacks is a thing that finishes. They stop for good once the fire has reached the killer.");
  let player_img_c = property_get(hero, "player_img_c");
  async function attacked() {
    let burning = property_get(evil, "burning");
    if (burning) {
      return;
    }
    let busy = property_get(hero, "busy");
    let evil_img = app_shared_game_npc_img_get(evil);
    let evil_seen = app_g_hero_seen_is(hero, evil_img);
    let player_seen = app_g_hero_seen_is(hero, player_img_c);
    if (evil_seen && player_seen && not(busy)) {
      await app_g_hero_dark_attack(hero, evil);
    }
    let wait = random_range(2500, 4500);
    setTimeout(attacked, wait);
  }
  setTimeout(attacked, 1000);
}
