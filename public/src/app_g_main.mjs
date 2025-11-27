import { each } from "../../../love/public/src/each.mjs";
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
  let square_size = "64px";
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
    "map_tile_grass",
    "monsoongrass",
    "swamp_grass_mar",
    "swamp_grass_nov",
    "swamp_grass_oct",
    "swamp_grass_sep",
    "swamp_grass_snowy",
    "yellow_grass",
  ];
  const src = tiles_path + "grass.png";
  function lambda(item) {}
  each(list, lambda);
  let tile = html_img(div, src);
  html_style_size_square(tile, square_size);
  html_style_assign(tile, {
    position: "absolute",
    x: "0px",
    y: "0px",
  });
  const src2 = game_prefix + "characters\\man_1\\rotations\\south.png";
  let c = html_img(div, src2);
  html_style_size_square(c, square_size);
  html_style_assign(c, {
    position: "absolute",
    x: "0px",
    y: "0px",
  });
}
