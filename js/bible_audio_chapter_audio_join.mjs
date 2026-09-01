import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_chunk_path } from "./bible_audio_chunk_path.mjs";
import { list_map } from "./list_map.mjs";
import { bible_audio_folder_chapter_audio } from "./bible_audio_folder_chapter_audio.mjs";
import { media_join_if_exists_not } from "./media_join_if_exists_not.mjs";
export async function bible_audio_chapter_audio_join(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Joins every recorded piece of a chapter, in the order it is read, into one sound file, and hands back where it put it.";
  "★ IT FINDS ITS OWN PIECES RATHER THAN BEING HANDED A LIST OF THEM, so that a chapter recorded again into a different number of pieces still joins correctly without anybody remembering to change a caller. The order is the order the chapter is read in, which is asked for rather than sorted here, because a chapter of ten pieces or more sorts wrongly as words and the one place that knows better already knows it.";
  "★ A CHAPTER ALREADY JOINED IS LEFT ALONE. Joining is the one step of making a video that costs real time on a long book, and the pieces are only ever written once, so running the whole of the making again is quick rather than being a second copy of the first run's work.";
  arguments_assert(arguments, 2);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  function chunk_path(chunk) {
    let n = property_get(chunk, "chunk");
    let p = bible_audio_chunk_path(bible_folder, chapter_code, n);
    return p;
  }
  let paths = list_map(chunks, chunk_path);
  let path_audio = bible_audio_folder_chapter_audio(bible_folder, chapter_code);
  await media_join_if_exists_not(path_audio, paths);
  return path_audio;
}
