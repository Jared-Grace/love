import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_remove } from "./list_remove.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
import { html_animate } from "./html_animate.mjs";
import { app_shared_game_npc_elements } from "./app_shared_game_npc_elements.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { emoji_headstone } from "./emoji_headstone.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { not } from "./not.mjs";
import { app_g_hero_evil_mark } from "./app_g_hero_evil_mark.mjs";
export async function app_g_hero_kill(hero, evil, victim) {
  arguments_assert(arguments, 3);
  ("The evil person kills the one beside them: the victim flashes red, falls and fades, and a headstone rises where they stood.");
  ("The victim leaves the crowd the moment they are struck, before anything is drawn, so nobody else - the hunter, the player walking, the crowd stepping aside - can reach for somebody who is already dead.");
  ("The headstone is part of the street rather than part of the victim, so it stays where they fell when everything they were is taken off the map.");
  let world = property_get(hero, "world");
  let npcs = property_get(world, "npcs");
  let div_map = property_get(hero, "div_map");
  property_set(victim, "held_still", "dead");
  list_remove(npcs, victim);
  let evil_img = app_shared_game_npc_img_get(evil);
  let direction = g_direction(evil, victim);
  app_shared_game_character_face(evil, evil_img, direction);
  let victim_img = app_shared_game_npc_img_get(victim);
  await html_animate(
    victim_img,
    [
      {
        filter: "none",
        opacity: 1,
        transform: "rotate(0deg)",
      },
      {
        filter: "brightness(1.6) sepia(1) saturate(8) hue-rotate(-40deg)",
        opacity: 1,
        transform: "rotate(-12deg)",
        offset: 0.3,
      },
      {
        filter: "grayscale(1) brightness(0.5)",
        opacity: 0,
        transform: "rotate(90deg) scale(0.8)",
      },
    ],
    {
      duration: 800,
      easing: "ease-in",
      fill: "forwards",
    },
  );
  let elements = app_shared_game_npc_elements(victim);
  each(elements, html_remove);
  let x = property_get(victim, "x");
  let y = property_get(victim, "y");
  let tile = {
    x,
    y,
  };
  let grave = g_img_square_div(div_map, tile, "character");
  html_click_none(grave);
  let font_size = g_img_square_size_times(0.8);
  html_style_assign(grave, {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-size": font_size,
  });
  let headstone = emoji_headstone();
  html_text_set(grave, headstone);
  let burning = property_get(evil, "burning");
  if (not(burning)) {
    app_g_hero_evil_mark(hero, evil);
  }
  await html_animate(
    grave,
    [
      {
        transform: "translateY(40%) scale(0.2)",
        opacity: 0,
      },
      {
        transform: "translateY(-10%) scale(1.25)",
        opacity: 1,
        offset: 0.6,
      },
      {
        transform: "translateY(0) scale(1)",
        opacity: 1,
      },
    ],
    {
      duration: 550,
      easing: "ease-out",
    },
  );
}
