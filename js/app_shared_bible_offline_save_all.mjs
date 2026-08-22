import { app_shared_bible_offline_save_all_text } from "./app_shared_bible_offline_save_all_text.mjs";
import { app_shared_bible_offline_starting_named_text } from "./app_shared_bible_offline_starting_named_text.mjs";
import { app_shared_bible_offline_saved_text } from "./app_shared_bible_offline_saved_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { app_shared_bible_offline_starting_all_text } from "./app_shared_bible_offline_starting_all_text.mjs";
import { app_shared_bible_offline_unfinished_all_text } from "./app_shared_bible_offline_unfinished_all_text.mjs";
import { app_shared_bible_offline_try_again_text } from "./app_shared_bible_offline_try_again_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_bible_offline_download_progress } from "./app_shared_bible_offline_download_progress.mjs";
import { app_shared_bible_offline_pending } from "./app_shared_bible_offline_pending.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space_and } from "./list_join_comma_space_and.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_offline_save_all(parent, listed, on_done) {
  "somebody who chose six languages asked for six, so offer to save all of them with one press rather than making them wait beside each one in turn";
  "all of them at once rather than one after another: the downloads do not wait on each other, so six that would have been six waits laid end to end become one, and the connection is busy for the whole of it instead of for a sixth of it";
  "each one is given its own line, which is what makes that readable: a single shared count under several downloads jumps between languages and tells the reader nothing, while a line per language shows every count moving and says whose it is";
  arguments_assert(arguments, 3);
  let pending = app_shared_bible_offline_pending(listed);
  let multiple = list_multiple_is(pending);
  if (not(multiple)) {
    ("with nothing left to fetch, or only one, each row's own button already says everything this one would");
    return;
  }
  let row = html_div(parent);
  let size = list_size(pending);
  let save = app_shared_bible_offline_save_all_text(size);
  app_shared_button(row, save, on_save);
  async function on_save() {
    html_clear(row);
    let starting = app_shared_bible_offline_starting_all_text();
    app_shared_text_quiet(row, starting);
    ("asked again here, so pressing try again after a half-finished run fetches only what is still missing");
    let waiting = app_shared_bible_offline_pending(listed);
    let unfinished = [];
    async function save_one(language) {
      let name = property_get(language, "name");
      let one = app_shared_bible_offline_starting_named_text(name);
      let status = app_shared_text_quiet(row, one);
      let finished = await app_shared_bible_offline_download_progress(
        status,
        language,
      );
      if (null_is(finished)) {
        list_add(unfinished, name);
        return;
      }
      ("said on the line itself the moment that one is done, because the whole screen is only drawn again once the last of them arrives, and a count left standing at its own total reads as stuck");
      let saved = app_shared_bible_offline_saved_text(name);
      html_text_set(status, saved);
    }
    await list_map_unordered_async(waiting, save_one);
    let any = list_empty_not_is(unfinished);
    if (any) {
      html_clear(row);
      let names = list_join_comma_space_and(unfinished);
      let sorry = app_shared_bible_offline_unfinished_all_text(names);
      app_shared_text_quiet(row, sorry);
      let again = app_shared_bible_offline_try_again_text();
      app_shared_button(row, again, on_save);
      return;
    }
    await on_done();
  }
}
