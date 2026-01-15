import { videos_join_if_exists_not } from "../../../love/public/src/videos_join_if_exists_not.mjs";
import { bible_audio_folder_book_video } from "../../../love/public/src/bible_audio_folder_book_video.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_chapter_videos_generate } from "../../../love/public/src/ebible_chapter_videos_generate.mjs";
import { ebible_book_code_to_chapter_codes } from "../../../love/public/src/ebible_book_code_to_chapter_codes.mjs";
export async function ebible_book_video_generate(bible_folder, book_code) {
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  async function lambda(chapter_code) {
    let v = await ebible_chapter_videos_generate(bible_folder, chapter_code);
    let path_video = object_property_get(v, "path_video");
    return path_video;
  }
  let path_videos = await list_map_async(chapter_codes, lambda);
  let path_video = bible_audio_folder_book_video(bible_folder, book_code);
  await videos_join_if_exists_not(path_video, path_videos);
}
