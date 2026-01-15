import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
import { ebible_chapter_videos_generate } from "../../../love/public/src/ebible_chapter_videos_generate.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "engwebu";
  const book_code = "SIR";
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda(chapter_code) {
    let v = await ebible_chapter_videos_generate(bible_folder, chapter_code);
    let path_video = object_property_get(v, "path_video");
  }
  let path_videos = await list_map_async(chapter_codes, lambda);
}
