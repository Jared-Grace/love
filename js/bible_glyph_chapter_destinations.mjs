import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_built_destination } from "./bible_glyph_chapter_built_destination.mjs";
import { bible_glyph_chapter_literal_destination } from "./bible_glyph_chapter_literal_destination.mjs";
export function bible_glyph_chapter_destinations(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names files in storage and nothing that runs.");
  ("Every file the picture Bible reads to draw one chapter: the built chapter, read in English order, and the word-for-word one, read in the original's order.");
  ("THE SAVE AND THE FREEING BOTH ASK HERE, so a reader can never free less than was saved, and a third way of drawing a chapter is added to both at once.");
  let built = bible_glyph_chapter_built_destination(chapter_code);
  let literal = bible_glyph_chapter_literal_destination(chapter_code);
  let destinations = [built, literal];
  return destinations;
}
