import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { app_shared_bible_offline_download_progress } from "./app_shared_bible_offline_download_progress.mjs";
import { ebible_offline_folder_delete } from "./ebible_offline_folder_delete.mjs";
import { app_shared_offline_row_generic } from "./app_shared_offline_row_generic.mjs";
export function app_shared_bible_offline_row(parent, language, on_change) {
  "one language: saved and offering to give its space back, or not saved and offering to fetch it";
  "a save that finished and a space that was freed both change what every other button on the screen should say - whether saving all of them is still on offer, whether there is any space left to free at all - so the whole list is drawn again rather than this one row, and the caller is the one who knows how to draw it";
  arguments_assert(arguments, 3);
  ("THE ROW ITSELF IS SHARED with the picture Bible, which keeps itself the same way; what is a language's own - its folder, how it is fetched and freed - is handed in from here.");
  let name = property_get(language, "name");
  ("which folder a language is read from is asked of the one place that answers it, the same place the reading itself asks, so this row cannot come to a different answer than the page it is offering to save");
  let bible_folder = ebible_language_bible_folder(language);
  function downloaded_is() {
    let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
    return downloaded;
  }
  async function download(status) {
    let finished = await app_shared_bible_offline_download_progress(
      status,
      language,
    );
    return finished;
  }
  async function free() {
    await ebible_offline_folder_delete(bible_folder);
  }
  app_shared_offline_row_generic(
    parent,
    name,
    downloaded_is,
    download,
    free,
    on_change,
  );
}
