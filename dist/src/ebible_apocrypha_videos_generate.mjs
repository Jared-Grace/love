import { bible_audio_folder_book_video_join } from "../../../love/public/src/bible_audio_folder_book_video_join.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { ebible_book_video_generate } from "../../../love/public/src/ebible_book_video_generate.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_version_books_testament_apocrypha } from "../../../love/public/src/ebible_version_books_testament_apocrypha.mjs";
export async function ebible_apocrypha_videos_generate() {
  const bible_folder = "engwebu";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(item) {
    let book_code = property_get(item, "book_code");
    log({
      book_code,
    });
    let v = await ebible_book_video_generate(bible_folder, book_code);
    return v;
  }
  let m = await list_map_async(books, lambda);
  let mapped = list_map_property(m, "path_video");
  let path_video = await bible_audio_folder_book_video_join(
    bible_folder,
    "apocrypha",
    mapped,
  );
}
