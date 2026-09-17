import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
export function bible_glyph_chapter_built_parsed(built, drawn) {
  arguments_assert(arguments, 2);
  ("$plain built");
  ("$plain drawn");
  ("the chapter is one built chapter as it is kept, and the lookup names a picture for each Strong's number. Both are data to read and neither runs.");
  ("One built picture Bible chapter turned into the parsed form every drawing of a chapter already reads, with each word's picture looked up by its number at the moment it is asked for.");
  ("THE LOOKUP IS HANDED IN, and that is where a reader's own choices will go. The table's pictures are one lookup; a reader who prefers another picture for a word lays their choice over it and hands in the result, and nothing here needs to know which of the two a picture came from.");
  ("A WORD GOES THROUGH THE SAME PARSER A HAND-WRITTEN WORD DOES. It is spelled in the shorthand first - a dollar and the picture's name, or its English - and then parsed, so a built chapter and a written one cannot come out in two different shapes for the drawing to disagree about.");
  ("A word with no picture and no English of its own is left out: its English was pulled into a neighbour, which already says it.");
  let verses = [];
  for (let verse of built.verses) {
    let words = [];
    for (let pair of verse.words) {
      let strong = pair[0];
      let english = pair[1];
      let glyph = property_get_or_null(drawn, strong);
      let undrawn = null_is(glyph) || equal(glyph, "");
      let spelled = undrawn ? english : text_combine("$", glyph);
      if (equal(spelled, "")) {
        continue;
      }
      let item = bible_glyph_word_parse(spelled);
      list_add(words, item);
    }
    list_add(verses, {
      verse_number: verse.verse_number,
      words,
    });
  }
  let chapter = {
    chapter_code: built.chapter_code,
    verses,
  };
  return chapter;
}
