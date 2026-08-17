import { app_g_view_render_study_fresh } from "./app_g_view_render_study_fresh.mjs";
import { app_g_view_render_study_render_pray_gate } from "./app_g_view_render_study_render_pray_gate.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_view_render_study(div_map) {
  let view = await app_g_view_get();
  let text = property_get(view, "text");
  let word_index = property_get(view, "word_index");
  let words = text_split_space(text);
  let overlay = app_g_overlay(div_map);
  let left = emoji_book_open();
  let text2 = text_combine(left, " Study: Tap each word in order");
  app_g_container_text(overlay, text2);
  let r = app_g_view_render_study_fresh(word_index, text, overlay, words);
  let fresh = property_get(r, "fresh");
  let render_words = property_get(r, "render_words");
  let container = property_get(r, "container");
  if (fresh) {
    app_g_view_render_study_render_pray_gate(container, render_words);
  } else {
    render_words();
  }
}
