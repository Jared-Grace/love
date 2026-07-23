import { ebible_offline_books_name } from "./ebible_offline_books_name.mjs";
import { ebible_offline_folder_downloaded_is } from "./ebible_offline_folder_downloaded_is.mjs";
import { ebible_offline_get } from "./ebible_offline_get.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_books_get(bible_folder) {
  let downloaded = ebible_offline_folder_downloaded_is(bible_folder);
  if (not(downloaded)) {
    return null;
  }
  let name = ebible_offline_books_name();
  let books = await ebible_offline_get(bible_folder, name);
  return books;
}
