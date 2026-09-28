import { app_shared_glow_look_here_if } from "./app_shared_glow_look_here_if.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_replace_symbol_tile_dead_background_color } from "./app_replace_symbol_tile_dead_background_color.mjs";
export function app_replace_symbol_tile_dead(sb) {
  let bg = app_replace_symbol_tile_dead_background_color();
  html_style_background_color_set(sb, bg);
  html_box_shadow_set(sb, "none");
  html_font_color_set(sb, "white");
  ("at a dead end no symbol is being asked for - starting over is - so none of them glows");
  app_shared_glow_look_here_if(false, sb);
}
