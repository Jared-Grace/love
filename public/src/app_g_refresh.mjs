import { g_img_square_size_css } from "../../../love/public/src/g_img_square_size_css.mjs";
import { g_icon } from "../../../love/public/src/g_icon.mjs";
import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { html_style_head } from "../../../love/public/src/html_style_head.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_scroll_center_container_now } from "../../../love/public/src/html_scroll_center_container_now.mjs";
import { html_on_load } from "../../../love/public/src/html_on_load.mjs";
import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { html_data_set_json } from "../../../love/public/src/html_data_set_json.mjs";
import { html_class_add } from "../../../love/public/src/html_class_add.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { app_g_main } from "./app_g_main.mjs";
export async function app_g_refresh(
  div_map,
  game_prefix,
  tiles_path,
  rows,
  map,
) {
  let { npcs } = map;
  marker("1");
  function lambda4(t) {
    global_function_property_set(app_g_main, t, null);
  }
  g_tutorials_each(lambda4);
  html_clear(div_map);
  let player = app_g_player_get();
  let player_img_c = g_character_img(game_prefix, div_map, player);
  const style_text = `@keyframes pulseGlow {
  0%,100% { 
    filter: 
      drop-shadow(0 0 1px rgba(255,255,255,0.5))
      drop-shadow(0 0 3px rgba(255,255,255,0.3))
      drop-shadow(0 0 12px rgba(255,255,255,0.1)); 
  }
  50% { 
    filter: 
      drop-shadow(0 0 2px rgba(255,255,255,1))
      drop-shadow(0 0 12px rgba(255,255,255,0.9))
      drop-shadow(0 0 24px rgba(255,255,255,0.7)); 
  }
}
  @keyframes upDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); } /* move up 10px */
}`;
  html_style_head(style_text);
  html_style_set(player_img_c, "animation", "pulseGlow 2s infinite alternate");
  function lambda12(npc) {
    let ci = g_character_img(game_prefix, div_map, npc);
    let tutorial = g_icon(div_map, npc, ``);
    he;`
<i class="ri-cross-fill"></i>
`;
    const square_size = `calc(` + g_img_square_size_css() + `*.4)`;
    const padding_size = `calc(` + g_img_square_size_css() + `*.1)`;
    const glow_size = `calc(` + g_img_square_size_css() + `*.1)`;
    html_style_assign(tutorial, {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      "padding-right": padding_size,
      textShadow: "0 0 3px white, 0 0 3px white, 0 0 3px white, 0 0 3px white",
      color: "#1fd000ff",
      textAlign: "right",
      fontSize: square_size,
    });
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
    await app_g_click(e, tile_class, div_map, player_img_c, map, game_prefix);
  }
  if (document.readyState === "complete") {
    lambda3();
  } else {
    html_on_load(lambda3);
  }
  async function lambda3() {
    let container = object_property_get(div_map, "container");
    await html_scroll_center_container_now(player_img_c, container);
  }
}
