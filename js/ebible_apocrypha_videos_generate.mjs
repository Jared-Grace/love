import { bible_audio_folder_book_video_join } from "./bible_audio_folder_book_video_join.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_book_video_generate } from "./ebible_book_video_generate.mjs";
import { log } from "./log.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
export async function ebible_apocrypha_videos_generate() {
  let bible_folder = "engwebu";
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  async function lambda(item) {
    let book_code = property_get(item, "book_code");
    log(ebible_apocrypha_videos_generate.name, {
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
