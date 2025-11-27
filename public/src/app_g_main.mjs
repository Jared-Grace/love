import { g_img_square } from "../../../love/public/src/g_img_square.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { g_folder_img } from "../../../love/public/src/g_folder_img.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_g_main() {
  marker("1");
  let body = html_document_body();
  html_style_assign(body, {
    margin: "0",
  });
  let div = html_div(body);
  html_style_assign(div, {
    position: "relative",
  });
  const square_count = 64;
  let square_size = square_count + "px";
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
        log(i3);
        la(g);
      }
      each_range(index + 1, lambda4);
    }
    each_index(taken, lambda3);
  }
  let list = list_adder(lambda5);
  log(list);
  function lambda2(y) {
    function lambda(x) {
      let r = list_random_item(list);
      const src = tiles_path + r + ".png";
      g_img_square(div, src, square_size, x, square_count, y);
      return;
    }
    each_range(10, lambda);
  }
  each_range(10, lambda2);
  const src2 = game_prefix + "characters\\man_1\\rotations\\south.png";
  let c = html_img(div, src2);
  html_style_size_square(c, square_size);
  html_style_assign(c, {
    position: "absolute",
    x: "0px",
    y: "0px",
  });
}
