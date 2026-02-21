import { bible_audio_folder_book_video_join } from "../../../love/public/src/bible_audio_folder_book_video_join.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_chapter_videos_generate } from "../../../love/public/src/ebible_chapter_videos_generate.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
export async function ebible_book_video_generate(bible_folder, book_code) {
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda(chapter_code) {
    let v = await ebible_chapter_videos_generate(bible_folder, chapter_code);
    let path_video = property_get(v, "path_video");
    return path_video;
  }
  let paths_videos = await list_map_async(chapter_codes, lambda);
  let path_video = await bible_audio_folder_book_video_join(
    bible_folder,
    book_code,
    paths_videos,
  );
  let v2 = {
    path_video,
  };
  return v2;
}
