import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
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
  let reach = divide(width, 2);
  let ox = random_range(-reach, reach);
  let largest = multiply(reach, 0.6);
  let oy = random_range(-reach, largest);
  let start = app_g_hero_translate_text(ox, oy);
  let right = multiply(width, 0.3);
  let y = subtract(oy, right);
  let flare = app_g_hero_translate_text(ox, y);
  let x = multiply(ox, 0.4);
  let right2 = random_range(1, 1.8);
  let right3 = multiply(width, right2);
  let y2 = subtract(oy, right3);
  let gone = app_g_hero_translate_text(x, y2);
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
