import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
export function g_img_square(parent, src, x, y, z) {
  let tile = html_img(parent, src);
  g_img_square_style_position(
    tile,
    {
      x,
      y,
    },
    z,
  );
  return tile;
}
