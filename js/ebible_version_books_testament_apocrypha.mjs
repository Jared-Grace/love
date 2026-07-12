import { ebible_class_apocrypha } from "./ebible_class_apocrypha.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
export async function ebible_version_books_testament_apocrypha(bible_folder) {
  let selector = ebible_class_apocrypha();
  let books = await ebible_version_books_testament(bible_folder, selector);
  return books;
}
