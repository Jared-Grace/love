import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_bible_record_inline_path_busy(refresh) {
  arguments_assert(arguments, 1);
  async function busy(button, words, work) {
    html_text_set(button, words);
    app_shared_button_disabled_set(button, true);
    try {
      await work();
    } finally {
      app_shared_button_disabled_set(button, false);
      refresh();
    }
  }
  return busy;
}
