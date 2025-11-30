import { each } from "../../../love/public/src/each.mjs";
import { integer_random_range } from "../../../love/public/src/integer_random_range.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
import { location_pathname_part_first_starts_with } from "../../../love/public/src/location_pathname_part_first_starts_with.mjs";
import { localhost_is } from "../../../love/public/src/localhost_is.mjs";
import { app_g_game_save } from "../../../love/public/src/app_g_game_save.mjs";
import { g_gender_male } from "../../../love/public/src/g_gender_male.mjs";
import { g_gender_female } from "../../../love/public/src/g_gender_female.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { bible_names_men } from "../../../love/public/src/bible_names_men.mjs";
import { bible_names_women } from "../../../love/public/src/bible_names_women.mjs";
import { g_tiles_grasses } from "../../../love/public/src/g_tiles_grasses.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { html_font_san_serif_value } from "../../../love/public/src/html_font_san_serif_value.mjs";
import { html_document_root } from "../../../love/public/src/html_document_root.mjs";
import { list_without } from "../../../love/public/src/list_without.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
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
export async function app_g_main() {
  marker("1");
  html_meta_viewport();
  let html = html_document_root();
  let style_value = html_font_san_serif_value();
  html_style_assign(html, {
    "font-family": style_value,
    "font-size": "18px",
  });
  let body = html_document_body();
  html_style_assign(body, {
    margin: "0",
    padding: 0,
    overflow: "hidden",
    height: "100%",
  });
  function lambda(item) {}
  each(list, lambda);
  let path_prefix = "";
  let v = localhost_is();
  const path_part = "latest";
  let sw = location_pathname_part_first_starts_with(path_part);
  if (v || sw) {
    path_prefix = "..\\";
  }
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
  let div_main = html_div(body);
  html_style_assign(div_main, {
    position: "relative",
    display: "grid",
  });
  let row_count = 30;
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
  const player_img = list_random_item(imgs_men);
  let names_men = bible_names_men();
  let player = {
    x: integer_random_range(column_count),
    y: integer_random_range(row_count),
    img: player_img,
    prayer: {
      conversation: false,
    },
    name: list_random_item(names_men),
    conversed: false,
  };
  let right = player_img;
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
    name: g_gender_female(),
    names: names_women,
    imgs: list_without(imgs_women, right),
  };
  let male = {
    name: g_gender_male(),
    names: names_men,
    imgs: list_without(imgs_men, right),
  };
  let genders = [male, female];
  let gender_count = list_size(genders);
  let npc_count = 30;
  let npcs = list_take(coordinates, npc_count);
  let map = {
    npcs,
    coordinates,
  };
  function npc_initialize(npc, index) {
    let r4 = mod(index, gender_count);
    let gender = list_get(genders, r4);
    let imgs2 = object_property_get(gender, "imgs");
    let r3 = list_random_item(imgs2);
    object_property_set(npc, "img", r3);
    let names2 = object_property_get(gender, "names");
    let r5 = list_random_item(names2);
    object_property_set(npc, "name", r5);
    let name2 = object_property_get(gender, "name");
    object_property_set(npc, "gender", name2);
    object_property_set(npc, "meet", false);
  }
  each_index(npcs, npc_initialize);
  app_g_game_save({
    player,
    npcs,
  });
  await app_g_refresh(div_main, game_prefix, tiles_path, rows, body, map);
}
