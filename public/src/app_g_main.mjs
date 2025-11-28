import { app_g_player } from "../../../love/public/src/app_g_player.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_g_menu_refresh } from "../../../love/public/src/app_g_menu_refresh.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { html_font_san_serif_value } from "../../../love/public/src/html_font_san_serif_value.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { app_karate_container_centered } from "../../../karate_code/public/src/app_karate_container_centered.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
import { html_on_transitionend } from "../../../love/public/src/html_on_transitionend.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { g_distance } from "../../../love/public/src/g_distance.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_includes } from "../../../love/public/src/object_includes.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { g_character_img } from "../../../love/public/src/g_character_img.mjs";
import { list_without } from "../../../love/public/src/list_without.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { g_img_square_style_position_object } from "../../../love/public/src/g_img_square_style_position_object.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { g_img_square_style } from "../../../love/public/src/g_img_square_style.mjs";
import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { g_folder_img } from "../../../love/public/src/g_folder_img.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_g_main() {
  marker("1");
  let html = html_document_root();
  let style_value = html_font_san_serif_value();
  html_style_set(html, "font-family", style_value);
  let body = html_document_body();
  html_style_assign(body, {
    margin: "0",
    padding: 0,
    overflow: "hidden",
  });
  let path_prefix = "..\\";
  const game_prefix = g_folder_img(path_prefix);
  const tiles_path = g_folder_tiles(path_prefix);
  let grasses = [
    "cyan_grass",
    "dustgrass",
    "grass",
    "grass_cold",
    "grass_dry",
    "grass_nov",
    "grass_oct",
    "grass_sep",
    "grass_snowy",
    "junglegrass",
    "monsoongrass",
    "swamp_grass_mar",
    "swamp_grass_nov",
    "swamp_grass_oct",
    "swamp_grass_sep",
    "swamp_grass_snowy",
    "yellow_grass",
  ];
  list_shuffle(grasses);
  let taken = list_take(grasses, 3);
  function lambda5(la) {
    function lambda3(g, index) {
      function lambda4(i3) {
        la(g);
      }
      each_range(index + 1, lambda4);
    }
    each_index(taken, lambda3);
  }
  let tiles = list_adder(lambda5);
  let div = html_div(body);
  html_style_assign(div, {
    position: "relative",
  });
  let row_count = 20;
  let column_count = row_count;
  function lambda10(la2) {
    function lambda6(i) {
      function lambda11(la3) {
        function lambda9(i2) {
          let r = list_random_item(tiles);
          la3(r);
        }
        each_range(column_count, lambda9);
      }
      let list2 = list_adder(lambda11);
      la2(list2);
    }
    each_range(row_count, lambda6);
  }
  let rows = list_adder(lambda10);
  let v = html_component_wrap(window);
  html_on(v, "resize", lambda8);
  let r2 = range_1(10);
  let men = list_map_combine_left("man_", r2);
  let women = list_map_combine_left("woman_", r2);
  let people = list_concat(women, men);
  const player_img = list_random_item(men);
  let player = {
    x: 5,
    y: 5,
    img: player_img,
    prayer: {
      tutorial: false,
      conversation: false,
    },
  };
  storage_local_set(app_g, "game", {
    player,
  });
  let right = player_img;
  let filtered = list_without(people, right);
  function lambda15(la4) {
    function lambda13(columns, y) {
      function lambda14(item2, x) {
        la4({
          x,
          y,
        });
      }
      each_index(columns, lambda14);
    }
    each_index(rows, lambda13);
  }
  let coordinates = list_adder(lambda15);
  list_shuffle(coordinates);
  let npc_count = 30;
  let npcs = list_take(coordinates, npc_count);
  function lambda16(c) {
    let r3 = list_random_item(filtered);
    object_property_set(c, "img", r3);
  }
  each(npcs, lambda16);
  let tutorial = null;
  function app_g_refresh(game_prefix, div, tiles_path) {
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
    html_style_set(
      player_img_c,
      "animation",
      "pulseGlow 2s infinite alternate",
    );
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
          let player2 = app_g_player();
          if (equal_not(tutorial, null)) {
            html_remove(tutorial);
          }
          let distance2 = g_distance(player2, clicked_coordinates);
          if (equal(distance2, 0)) {
            let overlay = app_g_overlay(div);
            app_g_menu_refresh(overlay);
            return;
          }
          function lambda17(npc) {
            let e = object_includes(npc, clicked_coordinates);
            return e;
          }
          let filtered2 = list_filter(npcs, lambda17);
          let e2 = list_empty_not_is(filtered2);
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
            log("away");
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
            if (not(conversation2)) {
              let container = app_karate_container_centered(overlay);
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
              let component2 = app_karate_button_back(overlay, lambda21);
            }
          }
        }
        html_on_click(clickable, on_tile_click);
      }
      each_index(columns, lambda);
    }
    each_index(rows, lambda2);
  }
  lambda8();
  function lambda8() {
    app_g_refresh(game_prefix, div, tiles_path);
  }
}
