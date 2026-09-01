import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chunk_texts } from "./bible_audio_chunk_texts.mjs";
import { property_get } from "./property_get.mjs";
import { bible_audio_chunk_path } from "./bible_audio_chunk_path.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_audio_chunk_paths(bible_folder, chapter_code) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Where the sound of every piece of a recorded chapter is kept, in the order the pieces are read.";
  "The order is the one the pieces were recorded in, so a list of these joined end to end is the chapter, and the same list weighed against a video says whether that video was made from this recording or an earlier one.";
  arguments_assert(arguments, 2);
  let chunks = await bible_audio_chunk_texts(bible_folder, chapter_code);
  function chunk_path(chunk) {
    let n = property_get(chunk, "chunk");
    let p = bible_audio_chunk_path(bible_folder, chapter_code, n);
    return p;
  }
  let paths = list_map(chunks, chunk_path);
  return paths;
}
