import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { app_karate_container_background_color } from "../../../love/public/src/app_karate_container_background_color.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { app_karate_container_centered } from "../../../karate_code/public/src/app_karate_container_centered.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { html_on_transitionend } from "../../../love/public/src/html_on_transitionend.mjs";
import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_includes } from "../../../love/public/src/object_includes.mjs";
import { app_g_menu_refresh } from "../../../love/public/src/app_g_menu_refresh.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { app_g_player_get } from "../../../love/public/src/app_g_player_get.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export function app_g_refresh(
  div,
  game_prefix,
  player,
  npcs,
  tiles_path,
  coordinates,
  rows,
) {
  global_function_property_set(app_g_refresh, "tutorial", null);
  html_clear(div);
  let player_img_c = g_character_img(game_prefix, div, player);
  let parent = html_document_head();
  let component = html_element(parent, "style");
  html_text_set(
    component,
    `@keyframes pulseGlow {
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
}`,
  );
  html_style_set(player_img_c, "animation", "pulseGlow 2s infinite alternate");
  function lambda12(npc) {
    let ci = g_character_img(game_prefix, div, npc);
  }
  each(npcs, lambda12);
  function lambda2(columns, y) {
    function lambda(r, x) {
      const src = tiles_path + r + ".png";
      g_img_square(div, src, x, y, "tile");
      let clickable = html_div(div);
      const clicked_coordinates = {
        x,
        y,
      };
      g_img_square_style(clickable, clicked_coordinates, "click");
      async function on_tile_click() {
        let tutorial = global_function_property_get(app_g_refresh, "tutorial");
        let player2 = app_g_player_get();
        if (equal_not(tutorial, null)) {
          html_remove(tutorial);
        }
        let distance2 = g_distance(player2, clicked_coordinates);
        log({
          distance2,
        });
        if (equal(distance2, 0)) {
          let overlay = app_g_overlay(div);
          app_g_menu_refresh(overlay);
          return;
        }
        function lambda17(npc) {
          let e = object_includes(npc, clicked_coordinates);
          return e;
        }
        let npcs_matched = list_filter(npcs, lambda17);
        let e2 = list_empty_not_is(npcs_matched);
        let coordinates_move_to = null;
        if (e2) {
          function lambda18(item) {
            let distance = g_distance(clicked_coordinates, item);
            let v2 = distance === 1;
            return v2;
          }
          let filtered3 = list_filter(coordinates, lambda18);
          list_shuffle(filtered3);
          function lambda19(item3) {
            let distance = g_distance(player2, item3);
            return distance;
          }
          list_sort_number_mapper(filtered3, lambda19);
          coordinates_move_to = list_first(filtered3);
        } else {
          coordinates_move_to = clicked_coordinates;
        }
        let distance = g_distance(player2, coordinates_move_to);
        object_assign(player2, coordinates_move_to);
        const away = distance >= 1;
        if (away) {
          let properties = ["left", "top"];
          function on_transition_begin() {
            g_img_square_style_position_object(player2, player_img_c);
          }
          await html_on_transitionend(
            properties,
            player_img_c,
            on_transition_begin,
          );
        }
        let element2 = html_component_element_get(player_img_c);
        element2.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        if (e2) {
          let overlay = app_g_overlay(div);
          let prayer2 = object_property_get(player2, "prayer");
          let conversation2 = object_property_get(prayer2, "conversation");
          if (conversation2) {
            let first = list_first(list);
          } else {
            let container = app_karate_container_centered(overlay);
            html_style_assign(container, {
              "background-color":
                app_karate_container_background_color() + "bc",
              padding: "0",
            });
            html_p_text(
              container,
              emoji_pray() +
                " You remember that you have not prayed, yet, before your next conversation!",
            );
            html_p_text(
              container,
              " To pray, tap or click on yourself (You glow with white)",
            );
            app_karate_style_control(container);
            function lambda21() {
              html_remove(overlay);
              tutorial = html_div(div);
              global_function_property_set(app_g_refresh, "tutorial", tutorial);
              g_img_square_style(tutorial, player2, "tutorial");
              let text = emoji_pray();
              html_text_set(tutorial, text);
              let rows = g_rows_count();
              const square_size = "calc(100vh / " + rows + " * .7)";
              html_style_assign(tutorial, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: square_size,
                animation: "upDown 1.25s infinite ease-in-out alternate",
              });
            }
            app_g_button_back(overlay, lambda21);
          }
        }
        app_g_player_save(player2);
      }
      html_on_click(clickable, on_tile_click);
    }
    each_index(columns, lambda);
  }
  each_index(rows, lambda2);
}
