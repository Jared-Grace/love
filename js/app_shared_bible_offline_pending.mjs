import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_offline_pending(listed) {
  "the languages on offer that are not on this device yet - what saving the whole set would actually have to fetch";
  "asked again every time rather than remembered, so a save that got half way through and a save that failed both leave the right work behind";
  function waiting_is(language) {
    let property_name = bible_folder_key();
    let bible_folder = property_get(language, property_name);
    let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
    let waiting = not(downloaded);
    return waiting;
  }
  let pending = list_filter(listed, waiting_is);
  return pending;
}
