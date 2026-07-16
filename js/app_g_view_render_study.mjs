import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_button_selected_background_color } from "./app_shared_button_selected_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_div } from "./html_div.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
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
  let current = word_index;
  let green = text_combine(app_shared_button_background(), "dd");
  let blue = text_combine(app_shared_button_selected_background_color(), "dd");
  let font = app_shared_button_font_color();
  let ring = text_combine_multiple([
    "0 0 0 0.12em ",
    font,
    ", 0 0 0 0.24em black",
  ]);
  let save_pending = null;
  async function persist() {
    save_pending = null;
    await app_g_view_set({
      kind: app_g_view_kind_study(),
      text,
      word_index: current,
    });
  }
  function persist_cancel() {
    if (save_pending !== null) {
      clearTimeout(save_pending);
      save_pending = null;
    }
  }
  function persist_soon() {
    persist_cancel();
    save_pending = setTimeout(persist, 400);
  }
  async function close() {
    persist_cancel();
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_button_back(overlay, close);
  let container = app_g_container(overlay);
  let words_div = html_div(container);
  function style_completed(b) {
    html_style_assign(b, {
      "background-color": blue,
      color: font,
      "font-weight": "normal",
      "box-shadow": "none",
    });
  }
  function style_upcoming(b) {
    html_style_assign(b, {
      "background-color": green,
      color: font,
      "font-weight": "normal",
      "box-shadow": "none",
    });
  }
  function style_next(b) {
    html_style_assign(b, {
      "background-color": green,
      color: font,
      "font-weight": "bold",
      "box-shadow": ring,
    });
  }
  let word_bs = [];
  function style_word(i) {
    let b = word_bs[i];
    if (i < current) {
      style_completed(b);
    } else if (i === current) {
      style_next(b);
    } else {
      style_upcoming(b);
    }
  }
  function tap(i) {
    async function on_tap() {
      let is_current = i === current;
      if (not(is_current)) {
        return;
      }
      current = i + 1;
      style_completed(word_bs[i]);
      let done = current >= words.length;
      if (done) {
        await close();
        return;
      }
      style_next(word_bs[current]);
      persist_soon();
    }
    return on_tap;
  }
  for (let i = 0; i < words.length; i++) {
    let b = app_shared_button_inline(words_div, words[i], tap(i));
    html_style_assign(b, {
      "padding-left": "0.4em",
      "padding-right": "0.4em",
    });
    word_bs.push(b);
    style_word(i);
  }
}
