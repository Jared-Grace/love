import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { app_g_map_generate } from "../../../love/public/src/app_g_map_generate.mjs";
import { html_hide_loadable } from "../../../love/public/src/html_hide_loadable.mjs";
import { g_icon_cross_unpositioned } from "../../../love/public/src/g_icon_cross_unpositioned.mjs";
import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { html_remix_icon } from "../../../love/public/src/html_remix_icon.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { list_remove_end } from "../../../love/public/src/list_remove_end.mjs";
import { html_scroll_none } from "../../../love/public/src/html_scroll_none.mjs";
import { html_z_max } from "../../../love/public/src/html_z_max.mjs";
import { each } from "../../../love/public/src/each.mjs";
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
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { list_without } from "../../../love/public/src/list_without.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { g_folder_img } from "../../../love/public/src/g_folder_img.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export async function app_g_main(context) {
  let root = object_property_get(context, "root");
  firebase_name_jg();
  let books = await ebible_version_books("engbsb");
  global_function_property_set(app_g_main, "books", books);
  global_function_property_set(app_g_main, "chapter_code", "JAS01");
  html_meta_viewport();
  html_font_sans_serif_set_html();
  html_remix_icon();
  function lambda(item) {
    html_style_assign(item, {
      "font-size": "18px",
      margin: "0",
      padding: 0,
      overflow: "hidden",
      height: "100%",
    });
  }
  each([root], lambda);
  let path_prefix = "";
  let l = localhost_is();
  const path_part = "latest";
  let sw = location_pathname_part_first_starts_with(path_part);
  if (l || sw) {
    path_prefix = "..\\";
  }
  const game_prefix = g_folder_img(path_prefix);
  let div_map_container = html_div(root);
  if (false) {
    html_style_assign(div_map_container, {
      position: "fixed",
      top: "0",
      left: "0",
      overflow: "auto",
      width: "100dvw",
      height: "100dvh",
      "z-index": html_z_max(),
      "pointer-events": "auto",
    });
  }
  html_style_assign(div_map_container, {
    position: "relative",
    overflow: "auto",
    width: "100%",
    height: "100%",
    "pointer-events": "auto",
  });
  await html_scroll_none(div_map_container);
  const tiles_path = g_folder_tiles(path_prefix);
  let rows = app_g_map_generate();
  let imgs_men_rg = range_1(18);
  let imgs_women_rg = range_1(21);
  let imgs_men = list_map_combine_left(imgs_men_rg, "man_");
  let imgs_women = list_map_combine_left(imgs_women_rg, "woman_");
  const player_img = list_random_item(imgs_men);
  let names_men = bible_names_men();
  let right = player_img;
  let coordinates = g_coordinates(rows);
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
  let npcs = list_remove_end(coordinates, npc_count);
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
    object_property_set(npc, "christian", false);
    object_property_set(npc, "objections", 2);
  }
  each_index(npcs, npc_initialize);
  let player_list = list_remove_last(coordinates);
  let player = list_single(player_list);
  let a = object_assign(player, {
    img: player_img,
    prayer: {
      conversation: false,
      study: false,
    },
    name: list_random_item(names_men),
    conversed: false,
    studied: false,
    review: [],
  });
  app_g_game_save({
    player,
    npcs,
  });
  function lambda4(t) {
    global_function_property_set(app_g_main, t, null);
  }
  g_tutorials_each(lambda4);
  let i = g_icon_cross_unpositioned(root);
  html_hide_loadable(i);
  await app_g_refresh(div_map_container, game_prefix, tiles_path, rows, map);
}
