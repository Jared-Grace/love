import { ebible_chapters } from "./ebible_chapters.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_verses(bible_folder) {
  let books = await ebible_version_books(bible_folder);
  marker("1");
  let first = list_first(books);
  let book_code = object_property_get(first, "book_code");
  let chapters = await ebible_chapters(bible_folder, book_code);
  return chapters;
}
