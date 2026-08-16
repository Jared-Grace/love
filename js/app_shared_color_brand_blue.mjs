import { app_shared_color_brand_blue_rgb } from "./app_shared_color_brand_blue_rgb.mjs";
import { color_rgb } from "./color_rgb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_brand_blue() {
  arguments_assert(arguments, 0);
  ("the strong blue this repo's pages lead with, written out the way a page reads a colour");
  ("The same blue the fading list of languages starts from - read from the one place its three parts are held, so a page that fills something with it and a page that steps away from it can never come to mean two different blues.");
  let parts = app_shared_color_brand_blue_rgb();
  let color = color_rgb(parts);
  return color;
}
