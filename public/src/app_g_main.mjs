import { bible_names_men } from "../../../love/public/src/bible_names_men.mjs";
import { bible_names_women } from "../../../love/public/src/bible_names_women.mjs";
import { g_tiles_grasses } from "../../../love/public/src/g_tiles_grasses.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { app_g_player_save } from "../../../love/public/src/app_g_player_save.mjs";
import { html_font_san_serif_value } from "../../../love/public/src/html_font_san_serif_value.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { list_without } from "../../../love/public/src/list_without.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
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
  let grasses = g_tiles_grasses();
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
  let r2 = range_1(10);
  let imgs_men = list_map_combine_left("man_", r2);
  let imgs_women = list_map_combine_left("woman_", r2);
  let people = list_concat(imgs_women, imgs_men);
  const player_img = list_random_item(imgs_men);
  let player = {
    x: 5,
    y: 5,
    img: player_img,
    prayer: {
      conversation: false,
    },
  };
  app_g_player_save(player);
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
  let names_women = bible_names_women();
  let female = {
    names: names_women,
    imgs: list_without(imgs_men, right),
  };
  let names_men = bible_names_men();
  let male = {
    names: names_men,
    imgs: list_without(imgs_women, right),
  };
  let npc_count = 30;
  let npcs = list_take(coordinates, npc_count);
  function lambda16(c) {
    let r3 = list_random_item(filtered);
    object_property_set(c, "img", r3);
  }
  each(npcs, lambda16);
  app_g_refresh(div, game_prefix, player, npcs, tiles_path, coordinates, rows);
}
