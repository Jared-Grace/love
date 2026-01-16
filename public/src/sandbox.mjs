import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  return books;
  let mapped = list_map_property(list, property_name);
}
