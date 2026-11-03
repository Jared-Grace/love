import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_offline_progress_text } from "./app_shared_offline_progress_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { bible_glyph_chapters_offline_download } from "./bible_glyph_chapters_offline_download.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_emoji_bible_offline_saved_set } from "./app_emoji_bible_offline_saved_set.mjs";
import { app_shared_offline_row_generic } from "./app_shared_offline_row_generic.mjs";
import { app_emoji_bible_offline_saved_get } from "./app_emoji_bible_offline_saved_get.mjs";
import { app_bible_emoji_offline_free } from "./app_bible_emoji_offline_free.mjs";
export function app_bible_emoji_offline_row(parent, on_change) {
  arguments_assert(arguments, 2);
  ("The offer to keep the whole picture Bible on this device, as the same row the bible reader offers a language with: save it and watch the chapters count, try again if it stops, or free the space once it is kept.");
  ("THE WHOLE BIBLE IS ONE ROW, not a row per book, asked for by the human as a download of the picture Bible. Rejected: a row per testament, a choice nobody has asked for.");
  ("IT IS NAMED AS THE APP IS, so the row says what a reader will find on their device.");
  let name = "Emoji Bible";
  async function download(status) {
    function on_progress(done, total) {
      let text = app_shared_offline_progress_text(name, done, total);
      html_text_set(status, text);
    }
    let missed = await bible_glyph_chapters_offline_download(on_progress);
    let complete = list_empty_is(missed);
    if (complete) {
      app_emoji_bible_offline_saved_set(true);
      return true;
    }
    return null;
  }
  app_shared_offline_row_generic(
    parent,
    name,
    app_emoji_bible_offline_saved_get,
    download,
    app_bible_emoji_offline_free,
    on_change,
  );
}
