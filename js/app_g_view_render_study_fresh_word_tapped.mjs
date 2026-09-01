import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_view_render_study_style_completed } from "./app_g_view_render_study_style_completed.mjs";
import { app_g_view_render_study_update_bar } from "./app_g_view_render_study_update_bar.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_g_view_render_study_render_thank_gate } from "./app_g_view_render_study_render_thank_gate.mjs";
import { app_g_view_render_study_style_next } from "./app_g_view_render_study_style_next.mjs";
export function app_g_view_render_study_fresh_word_tapped(
  i,
  {
    current,
    word_bs,
    bar_div,
    words,
    persist_cancel,
    container,
    close,
    persist_soon,
  },
) {
  "Everything the screen does once a word has been pressed and the reading has already been moved on past it.";
  "THE MOVING ON HAPPENED BEFORE THIS WAS CALLED, so the place handed in is where the reading stands now, not where it stood when the word was pressed.";
  "THE END OF THE PASSAGE IS THE ONE BRANCH THAT DOES NOT ASK TO BE SAVED, because the whole reading is finished and what stands there instead is the thanking.";
  "SAVING IS ASKED FOR LATE RATHER THAN NOW, so a person pressing word after word is not made to wait on a write between them.";
  arguments_assert(arguments, 2);
  app_g_view_render_study_style_completed(word_bs[i]);
  app_g_view_render_study_update_bar(bar_div, current, words);
  let done = greater_than_equal(current, words.length);
  if (done) {
    app_g_view_render_study_render_thank_gate(persist_cancel, container, close);
    return;
  }
  app_g_view_render_study_style_next(word_bs[current]);
  persist_soon();
}
