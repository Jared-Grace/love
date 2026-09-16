import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
export function app_g_hero_ring(fx, point, color, delay, grow) {
  arguments_assert(arguments, 5);
  ("One ring of light bursting outward from a point and fading as it widens.");
  ("It is a tile across to begin with and pulled back by half of that in each direction, so");
  ("it grows out of the point itself rather than down and to the right of it.");
  ("How far it grows is asked for rather than fixed, because the same burst has to read at");
  ("two sizes - a blow that shakes the whole street throws a ring clear off the screen, and");
  ("two powers meeting in mid air throw a small one that stays around the meeting.");
  ("It clears itself away, and nothing waits for it. A ring is the light of something that");
  ("has already happened, so whatever happens next should be happening while it spreads.");
  let circle = app_g_hero_sprite(fx, point, "", 1);
  let width = g_img_square_size_css();
  let back = g_img_square_size_times(-0.5);
  html_style_assign(circle, {
    width,
    height: width,
    "margin-left": back,
    "margin-top": back,
    "border-radius": "50%",
    border: text_combine("0.25em solid ", color),
    "box-shadow": text_combine_multiple([
      "0 0 1em ",
      color,
      ", inset 0 0 1em ",
      color,
    ]),
    "box-sizing": "border-box",
    opacity: 0,
  });
  let wide = text_combine_multiple(["scale(", grow, ")"]);
  html_animate_remove(
    circle,
    [
      {
        transform: "scale(0.2)",
        opacity: 1,
      },
      {
        transform: wide,
        opacity: 0,
      },
    ],
    {
      duration: 850,
      delay,
      easing: "cubic-bezier(0.1, 0.8, 0.3, 1)",
      fill: "both",
    },
  );
}
