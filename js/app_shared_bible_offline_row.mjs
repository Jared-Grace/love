import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_download } from "./ebible_offline_download.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_offline_row(parent, language) {
  let row = html_div(parent);
  let name = property_get(language, "name");
  let bible_folder = property_get(language, "bible_folder");
  render();
  function render() {
    html_clear(row);
    let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
    if (downloaded) {
      let saved = text_combine_multiple([
        emoji_check(),
        " ",
        name,
        " is saved on this device",
      ]);
      let div = html_div_text(row, saved);
      app_shared_text_deemphasized(div);
      return;
    }
    let save = text_combine_multiple([emoji_arrow_down(), " Save ", name]);
    app_shared_button(row, save, on_save);
  }
  async function on_save() {
    html_clear(row);
    let status = html_div_text(row, "Starting the download");
    app_shared_text_deemphasized(status);
    function on_progress(done, total) {
      let text = text_combine_multiple([
        "Saving ",
        name,
        ": ",
        done,
        " of ",
        total,
        " chapters",
      ]);
      html_text_set(status, text);
    }
    async function download() {
      await ebible_offline_download(bible_folder, on_progress);
      return true;
    }
    let finished = await catch_null_async(download);
    if (null_is(finished)) {
      html_clear(row);
      let sorry = text_combine_multiple([
        "That download did not finish. Would you like to check your connection and try ",
        name,
        " again?",
      ]);
      let div2 = html_div_text(row, sorry);
      app_shared_text_deemphasized(div2);
      let again = text_combine_multiple([emoji_arrow_down(), " Try again"]);
      app_shared_button(row, again, on_save);
      return;
    }
    render();
  }
}
