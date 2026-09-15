import { html_element_width } from "./html_element_width.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { emoji_fire } from "./emoji_fire.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { range } from "./range.mjs";
import { app_g_hero_flame } from "./app_g_hero_flame.mjs";
import { sleep } from "./sleep.mjs";
export async function app_g_hero_engulf(hero, point, evil_img) {
  arguments_assert(arguments, 3);
  ("The fire takes hold: the street darkens around the evil person, flames leap up all over them one after another, and they writhe as they glow white, then orange, then black.");
  ("The darkness is what makes the fire bright. The same flames over an ordinary daylight street read as a decoration; with everything else pushed back into shadow they are the only thing on the screen.");
  let fx = property_get(hero, "fx");
  let x = property_get(point, "x");
  let y = property_get(point, "y");
  let text = html_pixels_text(x);
  let text2 = html_pixels_text(y);
  let at = text_combine_multiple([text, " ", text2]);
  let dark = html_div(fx);
  html_style_assign(dark, {
    position: "absolute",
    inset: "0",
    background: text_combine_multiple([
      "radial-gradient(circle at ",
      at,
      ", rgba(0, 0, 0, 0) 0%, rgba(20, 0, 0, 0.45) 30%, rgba(0, 0, 0, 0.75) 100%)",
    ]),
    opacity: 0,
  });
  html_animate_start(
    dark,
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      duration: 400,
      fill: "forwards",
    },
  );
  let duration = 2400;
  html_animate_start(
    evil_img,
    [
      {
        filter: "brightness(1)",
      },
      {
        filter: "brightness(3.5) saturate(0)",
        offset: 0.12,
      },
      {
        filter: "brightness(1.6) sepia(1) saturate(7) hue-rotate(-25deg)",
        offset: 0.45,
      },
      {
        filter: "brightness(0.7) sepia(1) saturate(9) hue-rotate(-40deg)",
        offset: 0.75,
      },
      {
        filter: "brightness(0.08)",
      },
    ],
    {
      duration,
      fill: "forwards",
    },
  );
  html_animate_start(
    evil_img,
    [
      {
        transform: "translateX(0%) rotate(0deg)",
      },
      {
        transform: "translateX(-7%) rotate(-6deg)",
      },
      {
        transform: "translateX(7%) rotate(6deg)",
      },
      {
        transform: "translateX(0%) rotate(0deg)",
      },
    ],
    {
      duration: 240,
      iterations: 10,
    },
  );
  let width = html_element_width(evil_img);
  let fire = emoji_fire();
  let pillar = app_g_hero_sprite(fx, point, fire, 1);
  html_style_set(
    pillar,
    "filter",
    "drop-shadow(0 0 0.2em rgba(255, 120, 0, 1))",
  );
  html_animate_remove(
    pillar,
    [
      {
        transform: "translateY(0%) scale(0.3)",
        opacity: 0,
      },
      {
        transform: "translateY(-25%) scale(3.2)",
        opacity: 1,
        offset: 0.2,
      },
      {
        transform: "translateY(-30%) scale(2.6)",
        opacity: 1,
        offset: 0.5,
      },
      {
        transform: "translateY(-35%) scale(3.4)",
        opacity: 1,
        offset: 0.8,
      },
      {
        transform: "translateY(-60%) scale(1.5)",
        opacity: 0,
      },
    ],
    {
      duration: duration + 400,
      easing: "ease-in-out",
      fill: "forwards",
    },
  );
  let count = 28;
  let gap = divide(duration, count);
  let flames = range(count);
  for (let flame of flames) {
    app_g_hero_flame(fx, point, width);
    await sleep(gap);
  }
  html_animate_remove(
    dark,
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1600,
      delay: 900,
      fill: "forwards",
    },
  );
}
