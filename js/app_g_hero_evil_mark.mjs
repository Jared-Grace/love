import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_pointer_get } from "./app_shared_game_npc_pointer_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_hero_evil_color } from "./app_g_hero_evil_color.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { g_img_square_div } from "./g_img_square_div.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { g_img_square_size_times } from "./g_img_square_size_times.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { emoji_devil } from "./emoji_devil.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_game_npc_pointer_set } from "./app_shared_game_npc_pointer_set.mjs";
export function app_g_hero_evil_mark(hero, evil) {
  arguments_assert(arguments, 2);
  ("Somebody who has killed is marked for the rest of their life: a red glow around them and a devil's face over their head, both in the same red as the arrow that points to them.");
  ("The face is given to them as their pointer, which is the mark every step already carries along with a person, so it walks with them without anything here having to move it.");
  ("Marked once. A second killing changes nothing about how they look.");
  let already = app_shared_game_npc_pointer_get(evil);
  let marked = null_not_is(already);
  if (marked) {
    return;
  }
  let div_map = property_get(hero, "div_map");
  let color = app_g_hero_evil_color();
  let glow = text_combine_multiple([
    "drop-shadow(0 0 0.12em ",
    color,
    ") drop-shadow(0 0 0.35em ",
    color,
    ")",
  ]);
  let img = app_shared_game_npc_img_get(evil);
  html_style_set(img, "filter", glow);
  let horns = g_img_square_div(div_map, evil, "icon");
  html_click_none(horns);
  let font_size = g_img_square_size_times(0.6);
  let css = g_img_square_size_times(-0.9);
  let lift = text_combine_multiple(["translateY(", css, ")"]);
  html_style_assign(horns, {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "font-size": font_size,
    transform: lift,
    filter: glow,
  });
  let devil = emoji_devil();
  html_text_set(horns, devil);
  app_shared_game_npc_pointer_set(evil, horns);
}
