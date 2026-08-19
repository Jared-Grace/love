import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_get } from "./ebible_offline_get.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_downloaded_get(bible_folder, name) {
  "one piece of a bible kept on this device - a chapter, the book names, the index - or nothing where this bible was never kept";
  "nothing downloaded means no reason to touch browser storage at all, so a reader who never asked for an offline copy pays nothing";
  "every kind of piece asks the same two questions in the same order, so they are asked here once rather than once per kind - a kind added later gets the cheap answer for free instead of having to remember it";
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (not(downloaded)) {
    return null;
  }
  let value = await ebible_offline_get(bible_folder, name);
  return value;
}
