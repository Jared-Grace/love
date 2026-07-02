import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_version_books_names(bible_folder) {
  let books = await ebible_version_books(bible_folder);
  let book_names = list_map_property(books, "text");
  return book_names;
}
