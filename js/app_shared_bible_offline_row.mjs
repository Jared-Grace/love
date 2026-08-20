import { app_shared_bible_offline_saved_text } from "./app_shared_bible_offline_saved_text.mjs";
import { app_shared_bible_offline_free_text } from "./app_shared_bible_offline_free_text.mjs";
import { app_shared_bible_offline_save_text } from "./app_shared_bible_offline_save_text.mjs";
import { app_shared_bible_offline_freeing_text } from "./app_shared_bible_offline_freeing_text.mjs";
import { app_shared_bible_offline_starting_text } from "./app_shared_bible_offline_starting_text.mjs";
import { app_shared_bible_offline_unfinished_text } from "./app_shared_bible_offline_unfinished_text.mjs";
import { app_shared_bible_offline_try_again_text } from "./app_shared_bible_offline_try_again_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { app_shared_bible_offline_download_progress } from "./app_shared_bible_offline_download_progress.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_offline_folder_delete } from "./ebible_offline_folder_delete.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_offline_row(parent, language, on_change) {
  "one language: saved and offering to give its space back, or not saved and offering to fetch it";
  "a save that finished and a space that was freed both change what every other button on the screen should say - whether saving all of them is still on offer, whether there is any space left to free at all - so the whole list is drawn again rather than this one row, and the caller is the one who knows how to draw it";
  arguments_assert(arguments, 3);
  let row = html_div(parent);
  let name = property_get(language, "name");
  ("which folder a language is read from is asked of the one place that answers it, the same place the reading itself asks, so this row cannot come to a different answer than the page it is offering to save");
  let bible_folder = ebible_language_bible_folder(language);
  render();
  function render() {
    html_clear(row);
    let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
    if (downloaded) {
      let saved = app_shared_bible_offline_saved_text(name);
      app_shared_text_quiet(row, saved);
      let free = app_shared_bible_offline_free_text(name);
      app_shared_button(row, free, on_free);
      return;
    }
    let save = app_shared_bible_offline_save_text(name);
    app_shared_button(row, save, on_save);
  }
  async function on_free() {
    html_clear(row);
    let going = app_shared_bible_offline_freeing_text(name);
    app_shared_text_quiet(row, going);
    await ebible_offline_folder_delete(bible_folder);
    await on_change();
  }
  async function on_save() {
    html_clear(row);
    let starting = app_shared_bible_offline_starting_text();
    let status = app_shared_text_quiet(row, starting);
    let finished = await app_shared_bible_offline_download_progress(
      status,
      language,
    );
    if (null_is(finished)) {
      html_clear(row);
      let sorry = app_shared_bible_offline_unfinished_text(name);
      app_shared_text_quiet(row, sorry);
      let again = app_shared_bible_offline_try_again_text();
      app_shared_button(row, again, on_save);
      return;
    }
    await on_change();
  }
}
