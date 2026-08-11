import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_day_guide_window_axis } from "./app_g_day_guide_window_axis.mjs";
export function app_g_day_guide_window(player, tile, viewport, grid, content) {
  "PURE (no DOM): which tiles will be FULLY visible once the map has finished centring on the player, as the window [min_x..max_x, min_y..max_y] the gold guide is allowed to choose from.";
  "The arithmetic itself is one axis' worth and lives next door; what is left here is unpacking the three measurements and asking for it twice. The only thing that differs between the two asks is the bar: it covers the bottom edge, so a tile is never offered from underneath it, and it covers nothing on the horizontal - which is the whole of why the second argument to the two calls is not the same word.";
  arguments_assert(arguments, 5);
  let player_x = property_get(player, "x");
  let player_y = property_get(player, "y");
  let view_width = property_get(viewport, "width");
  let view_height = property_get(viewport, "height");
  let bar_height = property_get(viewport, "bar");
  let grid_left = property_get(grid, "left");
  let grid_top = property_get(grid, "top");
  let content_width = property_get(content, "width");
  let content_height = property_get(content, "height");
  let across = app_g_day_guide_window_axis(
    player_x,
    tile,
    view_width,
    grid_left,
    content_width,
    0,
  );
  let down = app_g_day_guide_window_axis(
    player_y,
    tile,
    view_height,
    grid_top,
    content_height,
    bar_height,
  );
  let r = {
    min_x: across.first,
    max_x: across.last,
    min_y: down.first,
    max_y: down.last,
  };
  return r;
}
