import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
import { bible_glyph_roots_glyph_sharers } from "./bible_glyph_roots_glyph_sharers.mjs";
import { bible_glyph_roots_collisions } from "./bible_glyph_roots_collisions.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add } from "./add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_collision_marks_walked() {
  "Every mark an authored chapter has already DRAWN using a picture two roots share, told apart by asking the interlinear which of those roots actually stands in that verse.";
  "SPLITTING A SHARED PICTURE IS CHEAP AND RE-DRAWING THE CHAPTERS IS NOT. The moment one of the two roots is moved to a picture of its own, every mark already on the page becomes a question - it was drawn when one picture served both, so the page records the picture and never the word. Read by hand that is hundreds of verses; read against the interlinear most of them are not a question at all, because only one of the two roots occurs in the verse and the mark can only have been that one.";
  "WHAT IT HANDS BACK IS EVIDENCE AND NEVER AN EDIT. A verse naming one of the pair decides that verse's marks with no judgment in it; a verse naming both decides nothing and a person reads it; a verse naming neither means the mark was drawn where the interlinear seats no member of the pair, which is a different fault and is kept apart rather than guessed at.";
  "IT COMPARES PRESENCE AND NEVER POSITIONS, the same bound the underdrawn reading states for the same reason: the authored chapter is readable English and the interlinear is word-for-word original, and no honest line can be drawn between them. Presence is enough here because the question is which of two words a picture could have meant, and a word the verse does not contain cannot be the one.";
  "EVERY OCCURRENCE COUNTS, including one English turned into a pronoun or dropped. The narrow reading would be to skip those, and it would be wrong in the dangerous direction: skipping an occurrence can leave one root standing alone and report a verse as DECIDED that a person would have had to read.";
  arguments_assert(arguments, 0);
  let chapters = bible_glyph_chapters();
  let decided = [];
  let ambiguous = [];
  let unseated = [];
  let walked = 0;
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let testament_name = bible_chapter_testament_name(chapter_code);
    let roots = bible_glyph_roots_testament_table(testament_name);
    let filed = bible_glyph_roots_root_lookup(roots);
    let glyph_roots = bible_glyph_roots_glyph_sharers(roots);
    let collisions = bible_glyph_roots_collisions(glyph_roots);
    let shared = {};
    for (let collision of collisions) {
      property_set(shared, collision.glyph, collision.roots);
    }
    let rows = await bible_glyph_chapter_draft_words(
      chapter_code,
      testament_name,
    );
    let present_by_verse = {};
    for (let row of rows) {
      let present = {};
      for (let word of row.words) {
        let glyph = word.glyph;
        let collides = property_exists(shared, glyph);
        if (not(collides)) {
          continue;
        }
        let started = property_exists(present, glyph);
        if (not(started)) {
          property_set(present, glyph, []);
        }
        let named = property_get(present, glyph);
        let root_name = property_get(filed, word.strong);
        let fresh = list_includes_not(named, root_name);
        if (fresh) {
          list_add(named, root_name);
        }
      }
      property_set(present_by_verse, row.verse_number, present);
    }
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let found = property_get_or_null(present_by_verse, verse_number);
      let missing = null_is(found);
      let present = {};
      let known = not(missing);
      if (known) {
        present = found;
      }
      for (let glyph of object_property_names(drawn)) {
        let collides = property_exists(shared, glyph);
        if (not(collides)) {
          continue;
        }
        let drew = property_get(drawn, glyph);
        walked = add(walked, drew);
        let named = property_get_or_null(present, glyph);
        let none = null_is(named);
        if (none) {
          named = [];
        }
        let sorted = list_sort_text(named);
        let entry = {
          chapter_code,
          verse_number,
          glyph,
          drew,
          roots: sorted,
          sharers: property_get(shared, glyph),
        };
        let count = list_size(sorted);
        let decidable = equal(count, 1);
        let empty = equal(count, 0);
        if (decidable) {
          list_add(decided, entry);
          continue;
        }
        if (empty) {
          list_add(unseated, entry);
          continue;
        }
        list_add(ambiguous, entry);
      }
    }
  }
  let r = {
    walked,
    decided,
    ambiguous,
    unseated,
  };
  return r;
}
