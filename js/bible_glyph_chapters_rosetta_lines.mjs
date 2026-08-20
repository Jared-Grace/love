import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rosetta_lines_1jn04 } from "./bible_glyph_chapter_rosetta_lines_1jn04.mjs";
import { bible_glyph_chapter_rosetta_lines_jhn01 } from "./bible_glyph_chapter_rosetta_lines_jhn01.mjs";
import { bible_glyph_chapter_rosetta_lines_jhn03 } from "./bible_glyph_chapter_rosetta_lines_jhn03.mjs";
export function bible_glyph_chapters_rosetta_lines() {
  arguments_assert(arguments, 0);
  "Every picture Bible chapter's two known Rosetta bands, one entry a chapter, in the order the chapters were written.";
  "The list is written out rather than the chapters being found by name, for the same reason the picture chapters themselves are: a reader asking what is here gets an answer instead of a search, and a page that ships gets a set of imports a bundler can see rather than a lookup it cannot.";
  "Each entry is a file a command wrote, so what is listed here is exactly what the writer next door has been run for. A picture chapter added without running it appears in the pictures and has no bands, which is the same thing that happens to a verse the pictures have not reached.";
  let first = bible_glyph_chapter_rosetta_lines_1jn04();
  let second = bible_glyph_chapter_rosetta_lines_jhn01();
  let third = bible_glyph_chapter_rosetta_lines_jhn03();
  let chapters = [first, second, third];
  return chapters;
}
