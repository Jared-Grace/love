import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_word_marks_edge } from "./bible_glyph_word_marks_edge.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function bible_glyph_chapters_marks_edges() {
  "Every picture standing at the end or at the start of a word in the chapters already written, named once for each edge it stands at rather than once for each picture.";
  "THE CHAPTERS ARE A SOURCE OF EDGES IN THEIR OWN RIGHT and not a copy of the tables. A verse can put a picture straight into a word without any root ever being seated on it, and that picture is then standing at a word edge on a page whatever the tables say. Asking the tables alone would hand back a picture as untouched while a chapter is already writing it.";
  "EACH CHAPTER IS OPENED ONE AT A TIME because what the list of chapters hands over is the shorthand a chapter is written in rather than the words it comes to, and reading the shorthand as though it were the words finds no pictures at all and says so without complaining.";
  "A WORD MAY HAVE A PICTURE AT ONE END AND LETTERS AT THE OTHER, so the two ends are asked separately and an end that is text simply adds nothing. That is why the answer is shorter than two per word, and why an end being text is not an absence to be counted.";
  arguments_assert(arguments, 0);
  let edges = [];
  let chapters = bible_glyph_chapters();
  for (let stored of chapters) {
    let chapter_code = property_get(stored, "chapter_code");
    let chapter = bible_glyph_chapter(chapter_code);
    let verses = property_get(chapter, "verses");
    for (let verse of verses) {
      let words = property_get(verse, "words");
      for (let word of words) {
        let ends = bible_glyph_word_marks_edge(word, true);
        let no_ending = equal(ends, null);
        if (not(no_ending)) {
          let word_ending = list_last(ends);
          list_add(edges, word_ending);
        }
        let starts = bible_glyph_word_marks_edge(word, false);
        let no_beginning = equal(starts, null);
        if (not(no_beginning)) {
          let word_beginning = list_first(starts);
          list_add(edges, word_beginning);
        }
      }
    }
  }
  return edges;
}
