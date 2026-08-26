import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_strong_verses(strong) {
  "$plain strong";
  "Every place one original word stands in the chapters already authored, with what English made of it there and how many marks that verse drew on the picture the word is seated on.";
  "IT ANSWERS THE QUESTION A SEAT COSTS MONEY TO ANSWER WRONG. Before a word is given a picture, the thing worth knowing is how often it actually turns up in what has been written and what English did with it each time - a word rendered as a negation in nine places and as nothing in the tenth is a different proposition from one rendered the same way every time. That was being answered by reading verses by hand, once per candidate word.";
  "IT ALSO FINDS THE OPPOSITE DEFECT TO THE UNDERDRAWN READING. That reading only looks at verses which drew at least one mark of a picture, because a verse drawing none of it gives nothing to compare against. So a word that is seated and left in plain letters everywhere in its verse is invisible there and visible here, as a row whose picture is set and whose count of marks is nought.";
  "A COUNT OF NOUGHT IS NOT BY ITSELF A FAULT and this hands back no verdict. English hides a negation inside cannot and inside except, and a verse that drew no mark may be right to have drawn none. What the row gives a reader is the gloss beside the count, which is what settles it.";
  "The unseated case is carried rather than skipped: a word with no picture yet has nothing to count marks of, so its count is nought for that reason instead, and the gloss is again what tells the two apart.";
  arguments_assert(arguments, 1);
  let wanted = number_from_text(strong);
  let chapters = bible_glyph_chapters();
  let found = [];
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let testament_name = bible_chapter_testament_name(chapter_code);
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let parsed = bible_glyph_chapter(chapter_code);
    let drawn_by_verse = {};
    for (let verse of parsed.verses) {
      let counts = bible_glyph_verse_glyph_counts(verse);
      property_set(drawn_by_verse, verse.verse_number, counts);
    }
    for (let row of rows) {
      for (let word of row.words) {
        let here = equal(word.strong, wanted);
        if (not(here)) {
          continue;
        }
        let drawn = property_get_or_null(drawn_by_verse, row.verse_number);
        let drew = 0;
        let missing = null_is(drawn);
        let known = not(missing);
        if (known) {
          let seats = property_get_or_null(drawn, word.glyph);
          let none = null_is(seats);
          let counted = not(none);
          if (counted) {
            drew = seats;
          }
        }
        list_add(found, {
          chapter_code,
          verse_number: row.verse_number,
          strong,
          original: word.original,
          gloss: word.gloss,
          glyph: word.glyph,
          drew,
        });
      }
    }
  }
  return found;
}
