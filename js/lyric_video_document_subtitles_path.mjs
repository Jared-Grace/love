import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function lyric_video_document_subtitles_path(path_document) {
  arguments_assert(arguments, 1);
  ("$plain path_document");
  ("Where the subtitle file of a lyric video is kept while it is made: in the ignored folder, under the timing document's own name.");
  ("★ IT IS NAMED AFTER THE TIMING DOCUMENT RATHER THAN AFTER THE PASSAGE OR THE SONG, because the document's own name is already the one thing that tells a whole chapter, a part of one, one singing from another and a song from a psalm apart. Named after the passage, two halves of one chapter would write over each other's workings-out.");
  ("★ IT IS ONE PLACE BECAUSE A PSALM AND A SONG ARE RENDERED BY THE SAME STEPS. Spelled in each caller, the two would keep their workings-out in two places the first time either was touched, and nobody looking for why a video came out as it did would know which to open.");
  let name_document = await path_basename(path_document);
  let stem = text_without_ending(name_document, ".json");
  let path_subtitles = folder_gitignore_join(stem + ".ass");
  return path_subtitles;
}
