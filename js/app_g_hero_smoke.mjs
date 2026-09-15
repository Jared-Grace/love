import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_dash } from "./emoji_dash.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { random_range } from "./random_range.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_hero_smoke(fx, point, width, index) {
  arguments_assert(arguments, 4);
  ("One puff of smoke rising from where the evil person burned, swelling and thinning as it climbs. Each puff leaves a little after the one before it, so the smoke keeps rising for a while after the fire is out.");
  let dash = emoji_dash();
  let tiles = random_range(0.8, 1.3);
  let puff = app_g_hero_sprite(fx, point, dash, tiles);
  html_style_set(puff, "filter", "grayscale(1) brightness(0.55)");
  let smallest = multiply(-width, 0.6);
  let largest = multiply(width, 0.6);
  let drift = random_range(smallest, largest);
  let right = random_range(2.2, 3.6);
  let rise = multiply(-width, right);
  let up = app_g_hero_translate_text(drift, rise);
  html_animate_remove(
    puff,
    [
      {
        transform: "translate(0px, 0px) scale(0.4) rotate(-90deg)",
        opacity: 0,
      },
      {
        transform: "translate(0px, 0px) scale(0.8) rotate(-90deg)",
        opacity: 0.85,
        offset: 0.15,
      },
      {
        transform: text_combine(up, " scale(2.8) rotate(-90deg)"),
        opacity: 0,
      },
    ],
    {
      duration: 2000,
      delay: multiply(index, 160),
      easing: "ease-out",
      fill: "both",
    },
  );
}
