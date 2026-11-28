import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_offline_languages } from "./app_shared_bible_offline_languages.mjs";
import { app_shared_bible_offline_pending } from "./app_shared_bible_offline_pending.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_offline_download } from "./ebible_offline_download.mjs";
import { noop } from "./noop.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_bible_record_offline_auto() {
  "Keeps every chosen bible on the phone without being asked, the first time the phone app opens (human 2026-11-28: download everything on first open so it works offline). The phone app is a frame around the website, so a chapter never opened online would show nothing without a signal.";
  "The same download Settings offers as Keep on this device, so there is one meaning of a saved bible; only the ones not saved yet are fetched, so every later open does nothing.";
  "Quiet: nothing is drawn, because the page redraws on every move and a progress line would vanish; Settings still shows each language as saved once it is. A download that fails is not named as saved, so the next open tries it again.";
  "REJECTED: in the browser too - a visitor to the website did not ask for a whole bible on their device.";
  let languages = app_shared_bible_languages_chosen_get();
  let listed = app_shared_bible_offline_languages(languages);
  let pending = app_shared_bible_offline_pending(listed);
  async function save_one(language) {
    let bible_folder = ebible_language_bible_folder(language);
    async function download() {
      await ebible_offline_download(bible_folder, noop);
    }
    await catch_null_async(download);
  }
  await list_map_unordered_async(pending, save_one);
}
