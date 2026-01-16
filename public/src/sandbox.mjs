import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_book_video_generate } from "../../../love/public/src/ebible_book_video_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(item) {
    let book_code = object_property_get(item, "book_code");
    log({
      book_code,
    });
    await ebible_book_video_generate(bible_folder, book_code);
  }
  let m = await list_map_async(books, lambda);
  let mapped = list_map_property(list, property_name);
}
