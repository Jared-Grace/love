import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let mapped = list_map_property(books, "text");
  let joined = list_join_newline(mapped);
  return joined;
}
