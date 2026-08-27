import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_descendants_all } from "./html_descendants_all.mjs";
import { html_style_background_color_get } from "./html_style_background_color_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_shared_code_surfaces_inside(component) {
  "every run of code sitting anywhere inside a thing";
  "Found by the colour a code surface is painted, because that is the one mark all of them carry and it is put there by the single function that dresses code. A name or a class would be a second mark saying the same thing, and two marks are two chances to disagree.";
  arguments_assert(arguments, 1);
  let dark = app_shared_color_code_background();
  let insides = html_descendants_all(component);
  function code_is(inside) {
    let color = html_style_background_color_get(inside);
    let r2 = equal(color, dark);
    return r2;
  }
  let r = list_filter(insides, code_is);
  return r;
}
