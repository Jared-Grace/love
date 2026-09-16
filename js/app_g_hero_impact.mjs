import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_pixels_point_text } from "./html_pixels_point_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { app_g_hero_ring } from "./app_g_hero_ring.mjs";
import { each } from "./each.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
export function app_g_hero_impact(hero, point) {
  arguments_assert(arguments, 2);
  ("The moment the fireball strikes: the whole screen flashes white-hot from the point of impact, two rings of fire burst outward, and the street shakes.");
  ("Nothing here is waited for. The flash and the rings clear themselves away, and the engulfing begins while they are still spreading, so the strike and the burning read as one blow.");
  ("The two rings are thrown far enough to leave the screen, because this is the blow that ends the fight rather than a meeting of two powers that has still to be settled.");
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
    app_g_hero_ring(fx, point, color, delay, 9);
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
