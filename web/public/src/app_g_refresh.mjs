import { null_is } from "../../../love/public/src/null_is.mjs";
import { catch_null_async } from "../../../love/public/src/catch_null_async.mjs";
import { app_g_player_img } from "../../../love/public/src/app_g_player_img.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { app_g_path_prefix } from "../../../love/public/src/app_g_path_prefix.mjs";
import { g_game_prefix } from "../../../love/public/src/g_game_prefix.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { html_on_load_wait } from "../../../love/public/src/html_on_load_wait.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { g_icon_cross } from "../../../love/public/src/g_icon_cross.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_scroll_center_container_now } from "../../../love/public/src/html_scroll_center_container_now.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { html_data_set_json } from "../../../love/public/src/html_data_set_json.mjs";
import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
export async function app_g_refresh(div_map_container, rows) {
  let path_prefix = app_g_path_prefix();
  const tiles_path = g_folder_tiles(path_prefix);
  const game_prefix = g_game_prefix();
  html_clear(div_map_container);
  let div_map = html_div(div_map_container);
  property_set_exists_not(div_map, "container", div_map_container);
  html_style_assign(div_map, {
    position: "relative",
    display: "grid",
  });
  async function refresh() {
    await app_g_refresh(div_map_container, rows);
  }
  let g = await catch_null_async(app_g_game_save_get);
  if (null_is(g)) {
  }
  let npcs = property_get(g, "npcs");
  let player = property_get(g, "player");
  let player_img_c = app_g_player_img(game_prefix, div_map, player);
  function lambda12(npc) {
    let ci = g_character_img(game_prefix, div_map, npc);
    let christian = property_get(npc, "christian");
    if (christian) {
      g_icon_cross(div_map, npc);
    }
  }
  each(npcs, lambda12);
  let rows_size = list_size(rows);
  html_style_assign(div_map, {
    gridTemplateRows: "repeat(" + rows_size + ", auto)",
  });
  const tile_class = "tile";
  function lambda2(columns, y) {
    let columns_size = list_size(columns);
    html_style_assign(div_map, {
      gridTemplateColumns: "repeat(" + columns_size + ", auto)",
    });
    function lambda(r, x) {
      const src = tiles_path + r + ".png";
      let tile = html_img(div_map, src);
      g_img_square_style(tile);
      html_class_add(tile, tile_class);
      const coordinates_tile = {
        x,
        y,
      };
      html_data_set_json(tile, "coordinates", coordinates_tile);
    }
    each_index(columns, lambda);
  }
  each_index(rows, lambda2);
  html_on_click(div_map, on_click);
  async function on_click(e) {
    await app_g_click(e, tile_class, div_map, player_img_c, refresh);
  }
  await html_on_load_wait();
  let container = property_get(div_map, "container");
  await html_scroll_center_container_now(player_img_c, container);
}
