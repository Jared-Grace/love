import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export function app_shared_bible_offline_pending(listed) {
  "the languages on offer that are not on this device yet - what saving the whole set would actually have to fetch";
  "asked again every time rather than remembered, so a save that got half way through and a save that failed both leave the right work behind";
  "which folder a language is read from is asked of the one place that answers it, rather than read off the language here: a language may carry its folder on itself or list several translations and mean the first of them, and a screen that only knows the first shape calls a language nobody has saved a language that is saved - or the other way about";
  function waiting_is(language) {
    let bible_folder = ebible_language_bible_folder(language);
    let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
    let waiting = not(downloaded);
    return waiting;
  }
  let pending = list_filter(listed, waiting_is);
  return pending;
}
