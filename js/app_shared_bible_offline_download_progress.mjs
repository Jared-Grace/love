import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_download } from "./ebible_offline_download.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_bible_offline_download_progress(
  status,
  language,
) {
  "keep one language on this device while the line you are handed counts the chapters off, so a long download never looks stuck";
  "null comes back when it did not finish, and the caller decides what to say about that - a single row offers that one again, a whole-set save gathers the names and offers them together";
  arguments_assert(arguments, 2);
  let name = property_get(language, "name");
  let property_name = bible_folder_key();
  let bible_folder = property_get(language, property_name);
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
  return finished;
}
