import { app_g_view_render_study_render_pray_gate } from "./app_g_view_render_study_render_pray_gate.mjs";
import { app_g_view_render_study_render_thank_gate } from "./app_g_view_render_study_render_thank_gate.mjs";
import { app_g_view_render_study_style_word } from "./app_g_view_render_study_style_word.mjs";
import { app_g_view_render_study_style_completed } from "./app_g_view_render_study_style_completed.mjs";
import { app_g_view_render_study_style_next } from "./app_g_view_render_study_style_next.mjs";
import { app_g_view_render_study_update_bar } from "./app_g_view_render_study_update_bar.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function app_g_view_render_study(div_map) {
  let view = await app_g_view_get();
  let text = property_get(view, "text");
  let word_index = property_get(view, "word_index");
  let words = text_split_space(text);
  let overlay = app_g_overlay(div_map);
  let left = emoji_book_open();
  let text2 = text_combine(left, " Study: Tap each word in order");
  app_g_container_text(overlay, text2);
  let current = word_index;
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
    if (not_equal(save_pending, null)) {
      clearTimeout(save_pending);
      save_pending = null;
    }
  }
  function persist_soon() {
    persist_cancel();
    save_pending = setTimeout(persist, 1500);
  }
  async function close() {
    persist_cancel();
    await app_g_view_set(null);
    html_remove(overlay);
  }
  app_g_button_back(overlay, close);
  let container = app_g_container(overlay);
  function render_words() {
    html_clear(container);
    let bar_div = html_div(container);
    app_g_view_render_study_update_bar(bar_div, current, words);
    let words_div = html_div(container);
    let word_bs = [];
    function tap(i) {
      async function on_tap() {
        let is_current = equal(i, current);
        if (not(is_current)) {
          return;
        }
        current = i + 1;
        app_g_view_render_study_style_completed(word_bs[i]);
        app_g_view_render_study_update_bar(bar_div, current, words);
        let done = greater_than_equal(current, words.length);
        if (done) {
          app_g_view_render_study_render_thank_gate(
            persist_cancel,
            container,
            close,
          );
          return;
        }
        app_g_view_render_study_style_next(word_bs[current]);
        persist_soon();
      }
      return on_tap;
    }
    for (let i = 0; less_than(i, words.length); i++) {
      let lambda = tap(i);
      let b = app_shared_button_inline(words_div, words[i], lambda);
      html_style_assign(b, {
        "padding-left": app_shared_content_edge_gap(),
        "padding-right": app_shared_content_edge_gap(),
        "font-size": app_shared_style_control_font_size(),
      });
      word_bs.push(b);
      app_g_view_render_study_style_word(i, word_bs, current);
    }
  }
  let fresh = equal(current, 0);
  if (fresh) {
    app_g_view_render_study_render_pray_gate(container, render_words);
  } else {
    render_words();
  }
}
