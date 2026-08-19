import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_view_render_study_container(r2) {
  arguments_assert(arguments, 1);
  let render_words = property_get(r2, "render_words");
  let fresh = property_get(r2, "fresh");
  let container = property_path_get_2(r2, "r", "container");
  let r3 = {
    render_words,
    fresh,
    container,
  };
  return r3;
}
