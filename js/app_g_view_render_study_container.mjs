import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_view_render_study_container(r2) {
  arguments_assert(arguments, 1);
  let render_words = property_get(r2, "render_words");
  let fresh = property_get(r2, "fresh");
  let r = property_get(r2, "r");
  let container = property_get(r, "container");
  let r3 = {
    render_words,
    fresh,
    container,
  };
  return r3;
}
