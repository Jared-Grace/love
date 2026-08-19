import { app_shared_bible_offline_download_progress } from "./app_shared_bible_offline_download_progress.mjs";
import { app_shared_bible_offline_pending } from "./app_shared_bible_offline_pending.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_async } from "./each_async.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma_space_and } from "./list_join_comma_space_and.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_offline_save_all(parent, listed, on_done) {
  "somebody who chose six languages asked for six, so offer to save all of them with one press rather than making them wait beside each one in turn";
  "one at a time on purpose: a phone downloading six bibles at once finishes none of them for a long while, and a reader watching a count that only ever moves for one language can tell how far along it is";
  arguments_assert(arguments, 3);
  let pending = app_shared_bible_offline_pending(listed);
  let multiple = list_multiple_is(pending);
  if (not(multiple)) {
    ("with nothing left to fetch, or only one, each row's own button already says everything this one would");
    return;
  }
  let row = html_div(parent);
  let size = list_size(pending);
  let e = emoji_arrow_down();
  let save = text_combine_multiple([e, " Save all ", size, " of them"]);
  app_shared_button(row, save, on_save);
  async function on_save() {
    html_clear(row);
    let status = html_div_text(row, "Starting the downloads");
    app_shared_text_deemphasized(status);
    ("asked again here, so pressing try again after a half-finished run fetches only what is still missing");
    let waiting = app_shared_bible_offline_pending(listed);
    let unfinished = [];
    async function save_one(language) {
      let finished = await app_shared_bible_offline_download_progress(
        status,
        language,
      );
      if (null_is(finished)) {
        let name = property_get(language, "name");
        list_add(unfinished, name);
      }
    }
    await each_async(waiting, save_one);
    let any = list_empty_not_is(unfinished);
    if (any) {
      html_clear(row);
      let names = list_join_comma_space_and(unfinished);
      let sorry = text_combine_multiple([
        "These did not finish: ",
        names,
        ". Would you like to check your connection and try them again?",
      ]);
      let div = html_div_text(row, sorry);
      app_shared_text_deemphasized(div);
      let e2 = emoji_arrow_down();
      let again = text_combine_multiple([e2, " Try again"]);
      app_shared_button(row, again, on_save);
      return;
    }
    await on_done();
  }
}
