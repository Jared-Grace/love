import { gloss_write_file_path_generic } from "./gloss_write_file_path_generic.mjs";
export function gloss_explains_write_file_path(chapter_code, verse_key, fn) {
  "Where the new wordings for one passage's word explanations are handed over: explains, then the chapter code, then the verses it covers.";
  "It is a different file from the one a whole passage is authored in, and deliberately so. That file carries every part of every explanation and is how a passage is first written; this one carries the wording alone and is how a passage already written is mended, so a mend cannot touch the Greek.";
  let path = gloss_write_file_path_generic(
    chapter_code,
    verse_key,
    fn,
    "explains_",
  );
  return path;
}
