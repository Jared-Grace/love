import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { random_range } from "./random_range.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
export function app_g_hero_ember(fx, point, width, index) {
  arguments_assert(arguments, 4);
  ("One glowing ember thrown out of the fire. The embers are spread evenly round the circle by their number, and each flies a different distance, so the burst is round without being regular.");
  ("It flies up and out first and then falls, the way a spark does, rather than gliding in a straight line to a stop.");
  let dot = app_g_hero_sprite(fx, point, "", 1);
  let factor = random_range(0.06, 0.14);
  let spark = g_img_square_size_times(factor);
  html_style_assign(dot, {
    width: spark,
    height: spark,
    "border-radius": "50%",
    background: "rgba(255, 200, 60, 1)",
    "box-shadow": "0 0 0.4em 0.15em rgba(255, 90, 0, 1)",
  });
  let left = divide(index, 22);
  let left2 = multiply(left, 2);
  let angle = multiply(left2, Math.PI);
  let right = random_range(1.2, 3.2);
  let far = multiply(width, right);
  let left3 = Math.cos(angle);
  let dx = multiply(left3, far);
  let left4 = Math.sin(angle);
  let dy = multiply(left4, far);
  let x = multiply(dx, 0.6);
  let left5 = multiply(dy, 0.6);
  let right2 = multiply(width, 0.5);
  let y = subtract(left5, right2);
  let peak = app_g_hero_translate_text(x, y);
  let land = app_g_hero_translate_text(dx, dy + multiply(width, 0.6));
  html_animate_remove(
    dot,
    [
      {
        transform: "translate(0px, 0px)",
        opacity: 1,
      },
      {
        transform: peak,
        opacity: 1,
        offset: 0.45,
      },
      {
        transform: land,
        opacity: 0,
      },
    ],
    {
      duration: random_range(800, 1300),
      easing: "ease-out",
      fill: "forwards",
    },
  );
}
