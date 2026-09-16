import { app_g_hero_projectile_ms } from "./app_g_hero_projectile_ms.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { text_combine } from "./text_combine.mjs";
import { divide } from "./divide.mjs";
import { sleep } from "./sleep.mjs";
import { app_g_hero_fx_point } from "./app_g_hero_fx_point.mjs";
import { random_range } from "./random_range.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { html_remove } from "./html_remove.mjs";
export async function app_g_hero_projectile(fx, from, to, text, glow) {
  arguments_assert(arguments, 5);
  ("A ball flies from one point to another, growing as it goes and shedding pieces of itself behind it. The symbol is what it is made of and the glow is the light around it, so the player's fire and the killer's dark power are one flight in two colours.");
  ("The pieces are dropped wherever the ball actually is at that moment, measured off the page, so the trail follows the ball's own curve of speed rather than a straight line worked out beside it.");
  let ball = app_g_hero_sprite(fx, from, text, 1.4);
  html_style_set(ball, "filter", glow);
  let left = property_get(to, "x");
  let right = property_get(from, "x");
  let dx = subtract(left, right);
  let left2 = property_get(to, "y");
  let right2 = property_get(from, "y");
  let dy = subtract(left2, right2);
  let travel = app_g_hero_translate_text(dx, dy);
  let duration = app_g_hero_projectile_ms();
  html_animate_start(
    ball,
    [
      {
        transform: "translate(0px, 0px) scale(0.5)",
      },
      {
        transform: text_combine(travel, " scale(2.2)"),
      },
    ],
    {
      duration,
      easing: "cubic-bezier(0.55, 0, 0.85, 0.5)",
      fill: "forwards",
    },
  );
  let count = 16;
  let gap = divide(duration, count);
  async function drop_next() {
    await sleep(gap);
    let here = app_g_hero_fx_point(fx, ball);
    let size = random_range(0.4, 0.9);
    let ember = app_g_hero_sprite(fx, here, text, size);
    let rise = random_range(-40, -15);
    let drift = random_range(-12, 12);
    let away = app_g_hero_translate_text(drift, rise);
    html_animate_remove(
      ember,
      [
        {
          transform: "translate(0px, 0px) scale(1)",
          opacity: 0.9,
        },
        {
          transform: text_combine(away, " scale(0.1)"),
          opacity: 0,
        },
      ],
      {
        duration: 600,
        easing: "ease-out",
        fill: "forwards",
      },
    );
  }
  await each_range_async(count, drop_next);
  html_remove(ball);
}
