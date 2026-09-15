import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_img_square_size_times(factor) {
  arguments_assert(arguments, 1);
  ("A length that is some number of map tiles, written for the style so that it follows the tile size a screen has set rather than a size worked out once.");
  let size = g_img_square_size_css();
  let css = text_combine_multiple(["calc((", size, ") * ", factor, ")"]);
  return css;
}
