import { property_get } from "./property_get.mjs";
import { app_g_view_render_study_fresh_fresh } from "./app_g_view_render_study_fresh_fresh.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_view_render_study_fresh(
  word_index,
  text,
  overlay,
  words,
) {
  arguments_assert(arguments, 4);
  let r = app_g_view_render_study_fresh_fresh(word_index, text, overlay, words);
  let fresh = property_get(r, "fresh");
  let render_words = property_get(r, "render_words");
  let container = property_get(r, "container");
  let r2 = {
    container,
    render_words,
    fresh,
  };
  return r2;
}
