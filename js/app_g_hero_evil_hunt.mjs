import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_hero_evil_step } from "./app_g_hero_evil_step.mjs";
import { app_g_hero_evil_pace_ms } from "./app_g_hero_evil_pace_ms.mjs";
export function app_g_hero_evil_hunt(hero, evil) {
  arguments_assert(arguments, 2);
  ("The evil person hunts for as long as they live: one step, then a wait, then the next.");
  ("Each wait is asked for as the step before it ends rather than by a loop, so starting the hunt is a thing that finishes. It stops for good once the fire has reached them.");
  async function hunted() {
    let burning = property_get(evil, "burning");
    if (burning) {
      return;
    }
    let wait = await app_g_hero_evil_step(hero, evil);
    setTimeout(hunted, wait);
  }
  let pace = app_g_hero_evil_pace_ms();
  setTimeout(hunted, pace);
}
