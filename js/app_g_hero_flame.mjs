import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { random_range } from "./random_range.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_hero_flame(fx, point, width) {
  arguments_assert(arguments, 3);
  ("One flame leaping up somewhere over a burning person: it appears at a random spot on them, flares, rises and dies away.");
  ("Each is a different size, place and length, so a burst of them reads as a fire rather than as one flame copied.");
  let fire = emoji_fire();
  let size = random_range(0.6, 1.6);
  let flame = app_g_hero_sprite(fx, point, fire, size);
  let reach = width / 2;
  let ox = random_range(-reach, reach);
  let oy = random_range(-reach, reach * 0.6);
  let start = app_g_hero_translate_text(ox, oy);
  let flare = app_g_hero_translate_text(ox, oy - width * 0.3);
  let gone = app_g_hero_translate_text(
    ox * 0.4,
    oy - width * random_range(1, 1.8),
  );
  let duration = random_range(700, 1200);
  html_animate_remove(
    flame,
    [
      {
        transform: text_combine(start, " scale(0)"),
        opacity: 0,
      },
      {
        transform: text_combine(flare, " scale(1.2)"),
        opacity: 1,
        offset: 0.3,
      },
      {
        transform: text_combine(gone, " scale(0.2)"),
        opacity: 0,
      },
    ],
    {
      duration,
      easing: "ease-out",
      fill: "forwards",
    },
  );
}
