import { divide } from "./divide.mjs";
import { app_g_hero_ground_div } from "./app_g_hero_ground_div.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { range } from "./range.mjs";
import { app_g_hero_ember } from "./app_g_hero_ember.mjs";
import { each } from "./each.mjs";
import { app_g_hero_smoke } from "./app_g_hero_smoke.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_animate_remove } from "./html_animate_remove.mjs";
import { html_animate } from "./html_animate.mjs";
import { html_remove } from "./html_remove.mjs";
export async function app_g_hero_ash(hero, evil, sheet) {
  arguments_assert(arguments, 3);
  ("The end of the burning: what is left of the evil person crumbles down into nothing, embers burst outward, smoke rises, and a scorch mark is left on the ground that slowly fades.");
  ("Everything the person was made of is taken off the map afterwards - their picture and the devil's face over them - so nothing of them is left standing on the street.");
  let fx = property_get(hero, "fx");
  let div_map = property_get(hero, "div_map");
  let evil_img = app_shared_game_npc_img_get(evil);
  let width = html_element_width(evil_img);
  let elements = app_shared_game_npc_elements(evil);
  ("THE EMBERS AND THE SMOKE ARE DRAWN IN THE STREET, in the same box the flames were, and");
  ("for the same reason: they belong to the person who burned, and he is standing on a square");
  ("rather than on the screen. The smoke is the worst of the four to get wrong because it is");
  ("the longest lived - it is still rising after everything else has gone, so it is the piece");
  ("most likely to be left hanging over ground the camera has walked away from.");
  ("Where it drifts TO is still its own business. Standing in the right place is not the same");
  ("as standing still, and a puff of smoke is supposed to leave the square it rose from.");
  let square = html_element_width(sheet);
  let half_ring = divide(square, 2);
  let spot = {
    x: half_ring,
    y: half_ring,
  };
  let embers = range(22);
  function ember_burst(index) {
    app_g_hero_ember(sheet, spot, width, index);
  }
  each(embers, ember_burst);
  let puffs = range(7);
  function puff_rise(index) {
    app_g_hero_smoke(sheet, spot, width, index);
  }
  each(puffs, puff_rise);
  let scorch = app_g_hero_ground_div(div_map, evil);
  html_style_assign(scorch, {
    background:
      "radial-gradient(circle, rgba(25, 10, 5, 0.85) 0%, rgba(40, 15, 5, 0.5) 45%, rgba(0, 0, 0, 0) 70%)",
    transform: "scale(1.6)",
  });
  html_animate_remove(
    scorch,
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 3000,
      delay: 5000,
      fill: "forwards",
    },
  );
  await html_animate(
    evil_img,
    [
      {
        transform: "translateY(0%) scale(1, 1)",
        filter: "brightness(0.08)",
        opacity: 1,
      },
      {
        transform: "translateY(30%) scale(1.1, 0.4)",
        filter: "brightness(0.05) grayscale(1)",
        opacity: 0.8,
        offset: 0.5,
      },
      {
        transform: "translateY(45%) scale(1.3, 0.05)",
        filter: "brightness(0.3) grayscale(1)",
        opacity: 0,
      },
    ],
    {
      duration: 900,
      easing: "ease-in",
      fill: "forwards",
    },
  );
  each(elements, html_remove);
}
