import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_style_size_square } from "../../../love/public/src/html_style_size_square.mjs";
export function g_img_square_style(tile, square_size, x, square_count, y, z) {
  html_style_size_square(tile, square_size);
  html_style_assign(tile, {
    position: "absolute",
    "z-index": list_index_of(["tile", "character", "click"], z),
  });
  g_img_square_style_position(tile, x, y);
}
