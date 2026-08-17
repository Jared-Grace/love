import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_render_study_r } from "./app_g_view_render_study_r.mjs";
export function app_g_view_render_study_render_words(view, div_map) {
  arguments_assert(arguments, 2);
  let text = property_get(view, "text");
  let r = app_g_view_render_study_r(view, text, div_map);
  let fresh = property_get(r, "fresh");
  let render_words = property_get(r, "render_words");
  let r2 = {
    r,
    fresh,
    render_words,
  };
  return r2;
}
