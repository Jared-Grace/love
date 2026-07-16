import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_deemphasized } from "./html_span_text_deemphasized.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
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
    text_combine(emoji_book_open(), " Study: tap each word in order"),
  );
  let container = app_g_container(overlay);
  let words_div = html_div(container);
  async function persist(index) {
    await app_g_view_set({
      kind: app_g_view_kind_study(),
      text,
      word_index: index,
    });
  }
  async function complete() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  function word_read(word_space) {
    html_span_text(words_div, word_space);
  }
  function word_unread(word_space) {
    html_span_text_deemphasized(words_div, word_space);
  }
  function word_next(word_space, index) {
    let span = html_span_text(words_div, word_space);
    html_style_assign(span, {
      "font-weight": "bold",
      "text-decoration": "underline",
    });
    async function on_tap() {
      let next = index + 1;
      await persist(next);
      let done = next >= words.length;
      if (done) {
        await complete();
      } else {
        draw(next);
      }
    }
    html_on_click(span, on_tap);
  }
  function draw(index) {
    html_clear(words_div);
    for (let i = 0; i < words.length; i++) {
      let word_space = text_combine(words[i], " ");
      if (i < index) {
        word_read(word_space);
      } else if (i === index) {
        word_next(word_space, index);
      } else {
        word_unread(word_space);
      }
    }
  }
  draw(word_index);
}
