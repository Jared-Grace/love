import { bible_audio_chunk_paths } from "./bible_audio_chunk_paths.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_folder_chapter_audio } from "./bible_audio_folder_chapter_audio.mjs";
import { media_join_if_stale } from "./media_join_if_stale.mjs";
export async function bible_audio_chapter_audio_join(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Joins every recorded piece of a chapter, in the order it is read, into one sound file, and hands back where it put it.";
  "★ IT FINDS ITS OWN PIECES RATHER THAN BEING HANDED A LIST OF THEM, so that a chapter recorded again into a different number of pieces still joins correctly without anybody remembering to change a caller. The order is the order the chapter is read in, which is asked for rather than sorted here, because a chapter of ten pieces or more sorts wrongly as words and the one place that knows better already knows it.";
  "★ A CHAPTER ALREADY JOINED IS LEFT ALONE UNLESS ITS PIECES HAVE MOVED SINCE. Joining is the one step of making a video that costs real time on a long book, so running the whole of the making again is quick rather than being a second copy of the first run's work - and a chapter recorded a second time still joins again, which is the case the plain does-it-exist test used to get quietly wrong.";
  arguments_assert(arguments, 2);
  let paths = await bible_audio_chunk_paths(bible_folder, chapter_code);
  let path_audio = bible_audio_folder_chapter_audio(bible_folder, chapter_code);
  await media_join_if_stale(path_audio, paths);
  return path_audio;
}
