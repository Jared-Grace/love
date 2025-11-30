import { html_scroll_center } from "../../../love/public/src/html_scroll_center.mjs";
import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_click_npc } from "../../../love/public/src/app_g_click_npc.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { html_on_transitionend } from "../../../love/public/src/html_on_transitionend.mjs";
import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_includes } from "../../../love/public/src/object_includes.mjs";
import { app_g_menu } from "../../../love/public/src/app_g_menu.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { html_data_get } from "../../../love/public/src/html_data_get.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export async function app_g_click(e, tile_class, div, player_img_c, body, map) {
  let player = app_g_player_get();
  let { npcs, coordinates } = map;
  marker("1");
  const tile_e = e.target.closest("." + tile_class);
  let tile = html_component_wrap(tile_e);
  let json = html_data_get(tile, "coordinates");
  let clicked_coordinates = json_from(json);
  let tutorial = global_function_property_get(app_g_refresh, "tutorial");
  if (equal_not(tutorial, null)) {
    html_remove(tutorial);
  }
  let distance2 = g_distance(player, clicked_coordinates);
  if (equal(distance2, 0)) {
    let overlay = app_g_overlay(body);
    app_g_menu(overlay, player);
  } else {
    function lambda17(npc) {
      let e = object_includes(npc, clicked_coordinates);
      return e;
    }
    let npcs_matched = list_filter(npcs, lambda17);
    let npc_clicked = list_empty_not_is(npcs_matched);
    let coordinates_move_to = null;
    if (npc_clicked) {
      function lambda18(item) {
        let distance = g_distance(clicked_coordinates, item);
        let v2 = distance === 1;
        return v2;
      }
      let filtered3 = list_filter(coordinates, lambda18);
      list_shuffle(filtered3);
      function lambda19(item3) {
        let distance = g_distance(player, item3);
        return distance;
      }
      list_sort_number_mapper(filtered3, lambda19);
      coordinates_move_to = list_first(filtered3);
    } else {
      coordinates_move_to = clicked_coordinates;
    }
    let distance = g_distance(player, coordinates_move_to);
    object_assign(player, coordinates_move_to);
    const away = distance >= 1;
    if (away) {
      let properties = ["left", "top"];
      function on_transition_begin() {
        g_img_square_style_position_object(player, player_img_c);
      }
      await html_on_transitionend(
        properties,
        player_img_c,
        on_transition_begin,
      );
    }
    html_scroll_center(element2);
    if (npc_clicked) {
      tutorial = app_g_click_npc(div, npcs_matched, tutorial, body, player);
    }
  }
  app_g_player_save(player);
}
