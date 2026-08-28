import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_marks_adjacent } from "./bible_glyph_chapter_marks_adjacent.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_marks_adjacent() {
  "Every place in the written picture Bible where one word ends in pictures and the next begins with them, so the gap between the two is the only thing telling a reader they are two words and not one.";
  "IT MEASURES WHAT THE WORD GAP IS ACTUALLY CARRYING. The rule of this Bible is that pictures touching are one word and pictures apart are two, and on a page that comparison is helped by the gap being drawn wider than an ordinary space. In plain text there was no such help until 2026-08-27 - a terminal, a message, anywhere the drawing is a run of characters - and the separator there was one ordinary space standing between two pictures each about an em wide. It is an em space now, as wide as the pictures either side of it, so the two media finally say the same thing and what this counts is where the gap is doing the whole job rather than where it is failing to.";
  "THE PAIR THAT DRAWS THE SAME MARK TWICE IS THE HARD CASE and it is counted apart from the rest. Two different pictures side by side at least look like two things; the same picture twice looks exactly like a group of two. So a reader meeting one of these has to measure a space to decide between a word and a doubled word, and that is the only place in the whole scheme where the reader is asked to measure anything. That is why no group may be seated on a doubled picture any more - one was, for following, and it was taken back out - so a doubled pair on a page is now always two words, and what stays measurable is only whether the reader sees the gap.";
  "IT COUNTS RATHER THAN JUDGES, and that is the point of running it. Whether a handful of these is a curiosity or the plain text drawing needs its own separator is a decision somebody makes about a number, and until this existed the number was nobody's - the case was found by rendering one famous verse and looking at it.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let touching = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = bible_glyph_chapter_marks_adjacent(chapter_code);
    list_add_multiple(touching, found);
  }
  let repeated = [];
  for (let pair of touching) {
    let same = property_get(pair, "same");
    if (same) {
      list_add(repeated, pair);
    }
  }
  let r = {
    chapters: list_size(chapters),
    touching_count: list_size(touching),
    repeated_count: list_size(repeated),
    repeated,
    touching,
  };
  return r;
}
