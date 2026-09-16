import { app_g_hero_fire_glow } from "./app_g_hero_fire_glow.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { app_g_hero_projectile } from "./app_g_hero_projectile.mjs";
export async function app_g_hero_fireball(fx, from, to) {
  arguments_assert(arguments, 3);
  ("A fireball flies from the player to the evil person, growing as it goes and shedding embers behind it.");
  let fire = emoji_fire();
  let glow = app_g_hero_fire_glow();
  await app_g_hero_projectile(fx, from, to, fire, glow);
}
