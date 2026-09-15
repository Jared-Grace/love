import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { app_g_hero_sprite } from "./app_g_hero_sprite.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
export function app_g_hero_impact(hero, point) {
  arguments_assert(arguments, 2);
  ("The moment the fireball strikes: the whole screen flashes white-hot from the point of impact, two rings of fire burst outward, and the street shakes.");
  ("Nothing here is waited for. The flash and the rings clear themselves away, and the engulfing begins while they are still spreading, so the strike and the burning read as one blow.");
  let fx = property_get(hero, "fx");
  let container_map = property_get(hero, "container_map");
  let at = html_pixels_point_text(point);
  let flash = html_div(fx);
  html_style_assign(flash, {
    position: "absolute",
    inset: "0",
    background: text_combine_multiple([
      "radial-gradient(circle at ",
      at,
      ", rgba(255, 255, 235, 1) 0%, rgba(255, 170, 0, 0.9) 25%, rgba(220, 40, 0, 0.55) 55%, rgba(80, 0, 0, 0.35) 100%)",
    ]),
  });
  html_animate_remove(
    flash,
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 900,
      easing: "ease-out",
      fill: "forwards",
    },
  );
  let rings = [
    {
      color: "rgba(255, 190, 0, 1)",
      delay: 0,
    },
    {
      color: "rgba(230, 40, 0, 1)",
      delay: 140,
    },
  ];
  function ring_burst(ring) {
    let color = property_get(ring, "color");
    let delay = property_get(ring, "delay");
    let circle = app_g_hero_sprite(fx, point, "", 1);
    let width = g_img_square_size_css();
    html_style_assign(circle, {
      width,
      height: width,
      "margin-left": g_img_square_size_times(-0.5),
      "margin-top": g_img_square_size_times(-0.5),
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
    html_animate_remove(
      circle,
      [
        {
          transform: "scale(0.2)",
          opacity: 1,
        },
        {
          transform: "scale(9)",
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
  each(rings, ring_burst);
  html_animate_start(
    container_map,
    [
      {
        transform: "translate(0px, 0px)",
      },
      {
        transform: "translate(-9px, 6px)",
      },
      {
        transform: "translate(8px, -7px)",
      },
      {
        transform: "translate(-6px, -5px)",
      },
      {
        transform: "translate(5px, 6px)",
      },
      {
        transform: "translate(-3px, 2px)",
      },
      {
        transform: "translate(0px, 0px)",
      },
    ],
    {
      duration: 550,
      easing: "linear",
    },
  );
}
