import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { html_animate } from "./html_animate.mjs";
import { app_g_hero_fx_point } from "./app_g_hero_fx_point.mjs";
import { emoji_moon_new } from "./emoji_moon_new.mjs";
import { app_g_hero_projectile } from "./app_g_hero_projectile.mjs";
import { emoji_shield } from "./emoji_shield.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
export async function app_g_hero_dark_attack(hero, evil) {
  arguments_assert(arguments, 2);
  ("The killer throws dark power at the player, and it does her no harm: they swell dark purple, a black orb flies at her, and it breaks on a shield of light around her.");
  ("It is only a sight. Nothing about the player changes - she keeps walking, keeps her fire, and cannot be killed - so the shield is what tells the player why.");
  ("The light of the shield is pale blue, never gold, because gold belongs to God; and it is not the orange of her fire, so a blocked attack never reads as one she threw.");
  let fx = property_get(hero, "fx");
  let player_img_c = property_get(hero, "player_img_c");
  let evil_img = app_shared_game_npc_img_get(evil);
  await html_animate(
    evil_img,
    [
      {
        transform: "scale(1)",
        filter: "brightness(1)",
      },
      {
        transform: "scale(1.3)",
        filter:
          "brightness(0.5) drop-shadow(0 0 0.2em rgba(120, 0, 200, 1)) drop-shadow(0 0 0.6em rgba(40, 0, 80, 1))",
        offset: 0.7,
      },
      {
        transform: "scale(1.1)",
        filter: "brightness(0.7) drop-shadow(0 0 0.1em rgba(120, 0, 200, 1))",
      },
    ],
    {
      duration: 450,
      easing: "ease-in",
    },
  );
  let burning = property_get(evil, "burning");
  if (burning) {
    return;
  }
  let from = app_g_hero_fx_point(fx, evil_img);
  let to = app_g_hero_fx_point(fx, player_img_c);
  let orb = emoji_moon_new();
  await app_g_hero_projectile(
    fx,
    from,
    to,
    orb,
    "drop-shadow(0 0 0.15em rgba(150, 0, 255, 1)) drop-shadow(0 0 0.5em rgba(30, 0, 60, 1))",
  );
  let text = emoji_shield();
  let shield = app_g_hero_sprite(fx, to, text, 1.6);
  html_style_set(
    shield,
    "filter",
    "drop-shadow(0 0 0.3em rgba(170, 225, 255, 1))",
  );
  html_animate_remove(
    shield,
    [
      {
        transform: "scale(0.3)",
        opacity: 0,
      },
      {
        transform: "scale(1.3)",
        opacity: 1,
        offset: 0.3,
      },
      {
        transform: "scale(1.6)",
        opacity: 0,
      },
    ],
    {
      duration: 700,
      easing: "ease-out",
      fill: "forwards",
    },
  );
  await html_animate(
    player_img_c,
    [
      {
        filter: "brightness(1)",
      },
      {
        filter:
          "brightness(1.6) drop-shadow(0 0 0.25em rgba(170, 225, 255, 1)) drop-shadow(0 0 0.6em rgba(255, 255, 255, 1))",
        offset: 0.3,
      },
      {
        filter: "brightness(1)",
      },
    ],
    {
      duration: 700,
      easing: "ease-out",
    },
  );
}
