import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder_book_video } from "./bible_audio_folder_book_video.mjs";
import { bible_audio_chunk_paths } from "./bible_audio_chunk_paths.mjs";
import { path_stale_is } from "./path_stale_is.mjs";
import { bible_audio_chapter_video_write } from "./bible_audio_chapter_video_write.mjs";
export async function bible_audio_chapter_video_stale_write(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "The verse-text video of a recorded chapter, made again only if the sound has moved since the video was made.";
  "★ THIS IS THE ONE TO CALL FROM ANYTHING THAT WALKS A WHOLE BOOK. Making the video is minutes of work per chapter, and a book asked for twice would spend all of that a second time to arrive at the files already there. Asking whether the sound is newer costs a date off each piece.";
  "The plain writer beneath is still the one to call for a single chapter somebody is looking at, because a person who asks for one video wants it made now whatever the dates say.";
  arguments_assert(arguments, 2);
  let path_video = bible_audio_folder_book_video(bible_folder, chapter_code);
  let paths = await bible_audio_chunk_paths(bible_folder, chapter_code);
  let stale = await path_stale_is(path_video, paths);
  if (stale) {
    let written = await bible_audio_chapter_video_write(
      bible_folder,
      chapter_code,
    );
    return written;
  }
  return path_video;
}
