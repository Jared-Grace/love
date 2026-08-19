import { ebible_offline_books_name } from "./ebible_offline_books_name.mjs";
import { ebible_offline_downloaded_get } from "./ebible_offline_downloaded_get.mjs";
export async function ebible_offline_books_get(bible_folder) {
  let name = ebible_offline_books_name();
  let books = await ebible_offline_downloaded_get(bible_folder, name);
  return books;
}
