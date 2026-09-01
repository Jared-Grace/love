import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_symbol_tile_dead } from "./app_replace_symbol_tile_dead.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
export async function app_replace_rule_set_dead_end_show(
  symbol_buttons_held,
  start_over,
) {
  arguments_assert(arguments, 2);
  function symbol_dead(symbol_button) {
    app_replace_symbol_tile_dead(symbol_button);
  }
  let list = property_get(symbol_buttons_held, "symbol_buttons");
  each(list, symbol_dead);
  let green = app_shared_color_green_light();
  html_style_background_color_set(start_over, green);
  await html_scroll_center(start_over);
}
