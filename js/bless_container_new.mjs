import { arguments_assert } from "./arguments_assert.mjs";
import { html_reload_on_hash_change } from "./html_reload_on_hash_change.mjs";
import { app_shared_game_player_style_initialize } from "./app_shared_game_player_style_initialize.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
import { bless_tile_size } from "./bless_tile_size.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_div } from "./html_div.mjs";
import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function bless_container_new(context) {
  arguments_assert(arguments, 1);
  html_reload_on_hash_change();
  app_shared_game_player_style_initialize();
  let root = html_mobile_default(context);
  let variable = g_img_square_size_variable();
  let size = bless_tile_size();
  html_style_variable_set(root, variable, size);
  html_style_assign(root, {
    margin: "0",
    padding: "0",
    height: "100%",
  });
  html_style_overflow_hidden(root);
  let container = html_div(root);
  html_style_assign(container, {
    position: "relative",
    overflow: "hidden",
    width: "100%",
  });
  let height = html_viewport_height_visible();
  html_style_set(container, "height", height);
  return container;
}
