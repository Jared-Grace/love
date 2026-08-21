import { bible_glyph_chapter_rosetta_lines_rewrite } from "./bible_glyph_chapter_rosetta_lines_rewrite.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_rosetta_lines_rewrite() {
  arguments_assert(arguments, 0);
  ("Builds the Rosetta bands again for every picture Bible chapter that already has a band file, putting each one over the file that is there, and says which chapters it wrote.");
  ("IT FINDS ITS OWN SET rather than being handed one, the same way the first writing of these files does. A list of which chapters have bands would be a second place that truth is written down, and it is the second place that goes stale - which is the fault this whole family of files was built to stop.");
  ("A CHAPTER WITH NO BAND FILE IS STEPPED OVER AND NEVER WRITTEN HERE. Laying a band down for the first time is the neighbour's work and it refuses a name that already exists; this one only ever replaces. Keeping the two apart means a run of this can never quietly author a chapter nobody asked for, and a run of that can never quietly change Bible text.");
  ("IT COMMITS EACH CHAPTER AS IT LANDS rather than the whole run at the end, because fifteen chapters are fifteen independent changes and this folder has many hands in it. A run that committed once at the end would lose its own name to whichever peer swept first, and the log would say a bare word where it should say which chapter was rebuilt and why it could be run again.");
  ("WHAT MOVES BETWEEN TWO RUNS IS THE READING OF THE INTERLINEAR AND NOT THE INTERLINEAR. The table underneath is downloaded and does not change, so running this twice in a row writes the same bytes the second time and git records nothing at all. It is worth running when the way the bands are BUILT has been corrected - which on 2026-08-21 it was, the reading of filler notation widening to drop the dash the tables print where the original says a word English does not say.");
  await ai_git_noted();
  let chapters = bible_glyph_chapters();
  let written = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let f_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
    let found = await function_exists(f_name);
    let exists = property_get(found, "exists");
    if (not(exists)) {
      continue;
    }
    await function_call_commit(bible_glyph_chapter_rosetta_lines_rewrite, [
      chapter_code,
    ]);
    list_add(written, chapter_code);
  }
  return written;
}
