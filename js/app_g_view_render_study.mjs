import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { app_g_button_green_style } from "./app_g_button_green_style.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
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
  app_g_container_text(
    overlay,
    text_combine(emoji_book_open(), " Study: Tap each word in order"),
  );
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_button_back(overlay, close);
  let container = app_g_container(overlay);
  let words_div = html_div(container);
  function ignore() {}
  async function persist(index) {
    await app_g_view_set({
      kind: app_g_view_kind_study(),
      text,
      word_index: index,
    });
  }
  function word_next(word, index) {
    async function on_tap() {
      let next = index + 1;
      await persist(next);
      let done = next >= words.length;
      if (done) {
        await close();
      } else {
        draw(next);
      }
    }
    let b = app_shared_button_inline(words_div, word, on_tap);
    app_g_button_green_style(b);
  }
  function draw(index) {
    html_clear(words_div);
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === index) {
        word_next(word, index);
      } else {
        app_shared_button_inline(words_div, word, ignore);
      }
    }
  }
  draw(word_index);
}
