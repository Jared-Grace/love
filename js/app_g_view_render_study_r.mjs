import { app_g_view_render_study_fresh_fresh } from "./app_g_view_render_study_fresh_fresh.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_view_render_study_fresh } from "./app_g_view_render_study_fresh.mjs";
export function app_g_view_render_study_r(view, text, div_map) {
  arguments_assert(arguments, 3);
  let word_index = property_get(view, "word_index");
  let words = text_split_space(text);
  let overlay = app_g_overlay(div_map);
  let left = emoji_book_open();
  let text2 = text_combine(left, " Study: Tap each word in order");
  app_g_container_text(overlay, text2);
  let r4 = app_g_view_render_study_fresh_fresh(
    word_index,
    text,
    overlay,
    words,
  );
  let fresh2 = property_get(r4, "fresh");
  let render_words2 = property_get(r4, "render_words");
  let container2 = property_get(r4, "container");
  let r22 = {
    fresh: fresh2,
    render_words: render_words2,
    container: container2,
  };
  let r3 = r22;
  let container = property_get(r3, "container");
  let render_words = property_get(r3, "render_words");
  let fresh = property_get(r3, "fresh");
  let r2 = {
    container,
    render_words,
    fresh,
  };
  let r = r2;
  return r;
}
