import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function sandbox() {
  let v = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
}
