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
  let square_size = "64px";
  let path_prefix = "..\\";
  const game_prefix = path_prefix + "img\\game\\";
  const src = game_prefix + "tiles\\seamless\\grass.png";
  let tile = html_img(body, src);
  html_style_size_square(tile, square_size);
  const src2 = game_prefix + "characters\\man_1\\rotations\\south.png";
  let c = html_img(body, src2);
  html_style_size_square(c, square_size);
}
