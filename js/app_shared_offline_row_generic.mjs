import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_bible_offline_saved_text } from "./app_shared_bible_offline_saved_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_bible_offline_free_text } from "./app_shared_bible_offline_free_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_offline_save_text } from "./app_shared_bible_offline_save_text.mjs";
import { app_shared_bible_offline_freeing_text } from "./app_shared_bible_offline_freeing_text.mjs";
import { app_shared_bible_offline_starting_text } from "./app_shared_bible_offline_starting_text.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_offline_unfinished_text } from "./app_shared_bible_offline_unfinished_text.mjs";
import { app_shared_bible_offline_try_again_text } from "./app_shared_bible_offline_try_again_text.mjs";
export function app_shared_offline_row_generic(
  parent,
  name,
  downloaded_is,
  fn_download,
  fn_free,
  on_change,
) {
  arguments_assert(arguments, 6);
  ("$plain name");
  ("the name is what this row offers to keep, as a reader reads it. It is text to show and nothing that runs.");
  ("One thing a reader can keep on this device: saved and offering to give its space back, or not saved and offering to fetch it, with the count moving while it comes and a try again if it does not.");
  ("IT IS WRITTEN ONCE BECAUSE TWO APPS OFFER IT. The bible reader keeps a language and the picture Bible keeps itself, so each hands in what saved means, how to fetch it and how to free it, and the buttons, words and order a reader learns stay the same in both.");
  ("fn_download is handed the line to count on and answers null when it did not finish, so the row says sorry and offers it again rather than claiming a save that did not happen.");
  ("a save that finished and a space that was freed both change what every other button on the screen should say, so the caller is told and draws the whole list again rather than this one row.");
  let row = html_div(parent);
  render();
  function render() {
    html_clear(row);
    let downloaded = downloaded_is();
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
    await fn_free();
    await on_change();
  }
  async function on_save() {
    html_clear(row);
    let starting = app_shared_bible_offline_starting_text();
    let status = app_shared_text_quiet(row, starting);
    let finished = await fn_download(status);
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
