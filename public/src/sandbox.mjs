import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_book_video_generate } from "../../../love/public/src/ebible_book_video_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  async function lambda(item) {
    let book_code = object_property_get(item, "book_code");
    log({
      book_code,
    });
    await ebible_book_video_generate(bible_folder, book_code);
  }
  await each_async(list, lambda);
}
