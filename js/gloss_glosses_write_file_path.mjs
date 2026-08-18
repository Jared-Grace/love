import { gloss_write_file_path_generic } from "./gloss_write_file_path_generic.mjs";
export function gloss_glosses_write_file_path(chapter_code, verse_key, fn) {
  "Where the new short English for one passage's words is handed over: glosses, then the chapter code, then the verses it covers.";
  "It is a third file beside the two already there, and deliberately so. One carries every part of every explanation and is how a passage is first written; one carries the prose alone and is how a passage already written has its voice mended; this one carries the short English alone, so a word left with a marker under it can be given its meaning without the prose beside it or the Greek above it being typed again.";
  let path = gloss_write_file_path_generic(
    chapter_code,
    verse_key,
    fn,
    "glosses_",
  );
  return path;
}
