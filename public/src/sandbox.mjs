import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function sandbox() {
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  ("C:\\Users\\chris\\Documents\\god_created_man_why.txt");
}
