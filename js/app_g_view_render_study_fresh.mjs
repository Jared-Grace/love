import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_render_study_fresh_save_pending } from "./app_g_view_render_study_fresh_save_pending.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { app_g_view_render_study_fresh_persist_cancel } from "./app_g_view_render_study_fresh_persist_cancel.mjs";
import { app_g_view_render_study_fresh_close } from "./app_g_view_render_study_fresh_close.mjs";
import { app_g_view_render_study_fresh_container } from "./app_g_view_render_study_fresh_container.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_view_render_study_update_bar } from "./app_g_view_render_study_update_bar.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_g_view_render_study_fresh_word_tapped } from "./app_g_view_render_study_fresh_word_tapped.mjs";
import { less_than } from "./less_than.mjs";
import { app_g_view_render_study_fresh_word_button } from "./app_g_view_render_study_fresh_word_button.mjs";
export function app_g_view_render_study_fresh(
  word_index,
  text,
  overlay,
  words,
) {
  "A passage opened for study from the beginning of a session, given back as the box it stands in together with the way to draw the words into it.";
  "DRAWING ONE WORD AND ANSWERING A PRESS ON ONE ARE BOTH DONE NEXT DOOR, so what stands here is the two things that cannot leave: the place the reading has got to, which every press moves, and the save that is waiting to happen, which every press pushes back.";
  "THE PLACE THE READING HAS GOT TO IS READ FRESH ON EVERY PRESS AND HANDED ON BY VALUE, never closed over by a piece made earlier, because a piece made earlier would carry the place as it stood then.";
  arguments_assert(arguments, 4);
  let r = app_g_view_render_study_fresh_save_pending(word_index);
  let save_pending = property_get(r, "save_pending");
  let current = property_get(r, "current");
  async function persist() {
    save_pending = null;
    await app_g_view_set({
      kind: app_g_view_kind_study(),
      text,
      word_index: current,
    });
  }
  function persist_cancel() {
    let app_g_view_render_study_fresh_persist_cancel_answer =
      app_g_view_render_study_fresh_persist_cancel(save_pending);
    save_pending = property_get(
      app_g_view_render_study_fresh_persist_cancel_answer,
      "save_pending",
    );
  }
  function persist_soon() {
    persist_cancel();
    save_pending = setTimeout(persist, 1500);
  }
  let close = app_g_view_render_study_fresh_close(persist_cancel, overlay);
  let container = app_g_view_render_study_fresh_container(overlay, close);
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
        app_g_view_render_study_fresh_word_tapped(
          i,
          current,
          word_bs,
          bar_div,
          words,
          persist_cancel,
          container,
          close,
          persist_soon,
        );
      }
      return on_tap;
    }
    for (let i = 0; less_than(i, words.length); i++) {
      let lambda = tap(i);
      app_g_view_render_study_fresh_word_button(
        words_div,
        words[i],
        i,
        lambda,
        word_bs,
        current,
      );
    }
  }
  let fresh = equal(current, 0);
  let r2 = {
    container,
    render_words,
    fresh,
  };
  return r2;
}
