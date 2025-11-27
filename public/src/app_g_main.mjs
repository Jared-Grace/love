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
  let path_prefix = "..\\";
  const game_prefix = path_prefix + "img\\game\\";
  const src = game_prefix + "tiles\\seamless\\grass.png";
  html_img(body, src);
  const src2 = game_prefix + "characters\\man_1\\rotations\\south.png";
  html_img(body, src2);
}
