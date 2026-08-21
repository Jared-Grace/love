import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rosetta_lines_1jn04 } from "./bible_glyph_chapter_rosetta_lines_1jn04.mjs";
import { bible_glyph_chapter_rosetta_lines_jhn01 } from "./bible_glyph_chapter_rosetta_lines_jhn01.mjs";
import { bible_glyph_chapter_rosetta_lines_jhn03 } from "./bible_glyph_chapter_rosetta_lines_jhn03.mjs";
export function bible_glyph_chapters_rosetta_lines() {
  arguments_assert(arguments, 0);
  ("Every picture Bible chapter's two known Rosetta bands, one entry a chapter, in the order the chapters were written.");
  ("The list is written out rather than the chapters being found by name, for the same reason the picture chapters themselves are: a reader asking what is here gets an answer instead of a search, and a page that ships gets a set of imports a bundler can see rather than a lookup it cannot.");
  ("Each entry is a file a command wrote, so what is listed here is exactly what the writer next door has been run for. A picture chapter added without running it appears in the pictures and has no bands, which is the same thing that happens to a verse the pictures have not reached.");
  ("TWELVE OF THESE FIFTEEN WERE WRITTEN TO DISK AND NAMED NOWHERE, which is what this list looked like for as long as it took somebody to ask a page why its key band was blank. The command next door had been run over every chapter and had left a file for each, and this list still named the three it was born with - so the bands existed, were committed, and could not be reached. A written-out list is a promise to keep writing it out, and the promise was quietly broken by whoever added a chapter and stopped one step short.");
  ("A GATE NOW HOLDS THE TWO LISTS TOGETHER, because this is two hand-kept lists of the same fifteen things and that is the shape that drifts rather than breaks. Nothing threw, nothing was red, and the only symptom was a reader being told less than the repo knew. Naming the chapters here is the repair; the gate next door is the reason it does not need doing again.");
  let chapters = [
    bible_glyph_chapter_rosetta_lines_1jn04(),
    bible_glyph_chapter_rosetta_lines_jhn01(),
    bible_glyph_chapter_rosetta_lines_jhn03(),
    bible_glyph_chapter_rosetta_lines_jhn14(),
    bible_glyph_chapter_rosetta_lines_1jn01(),
    bible_glyph_chapter_rosetta_lines_1jn05(),
    bible_glyph_chapter_rosetta_lines_1jn03(),
    bible_glyph_chapter_rosetta_lines_psa136(),
    bible_glyph_chapter_rosetta_lines_psa029(),
    bible_glyph_chapter_rosetta_lines_psa138(),
    bible_glyph_chapter_rosetta_lines_deu30(),
    bible_glyph_chapter_rosetta_lines_ezk33(),
    bible_glyph_chapter_rosetta_lines_exo20(),
    bible_glyph_chapter_rosetta_lines_jdg13(),
    bible_glyph_chapter_rosetta_lines_ezk18(),
  ];
  return chapters;
}
