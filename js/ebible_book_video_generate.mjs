import { bible_audio_folder_book_video_join } from "./bible_audio_folder_book_video_join.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_videos_generate } from "./ebible_chapter_videos_generate.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
export async function ebible_book_video_generate(bible_folder, book_code) {
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  "$plain bible_folder";
  "$plain book_code";
  "Every chapter of a book made into a verse-text video, and those joined into one video of the whole book.";
  "★ THE CHAPTERS USED TO BE MADE A PIECE AT A TIME AS A STILL PICTURE OF THE WORDS WITH ONE PIECE OF SOUND UNDER IT, AND EACH OF THOSE JOINED. That drew the words into a picture, so nothing could be changed about how they stood on the screen without drawing every picture in the Bible again, and a chapter of thirty pieces was thirty renders and thirty joins to arrive at one chapter. A chapter is one render from one document now, and the words are subtitles, so the whole look of every video in the Bible is the one place the subtitles are written.";
  arguments_assert(arguments, 2);
  async function lambda(chapter_code) {
    let path_video_chapter = await bible_audio_chapter_video_stale_write(
      bible_folder,
      chapter_code,
    );
    return path_video_chapter;
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
