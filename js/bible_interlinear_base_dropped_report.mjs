import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
("Every word that dropping the later editions removes from the published Bible text, listed");
("in full with the chapter and verse it came from, plus the totals it was removed against.");
("Listed in full, not sampled. This is a change to the text of scripture, and the argument");
("for making it is that the removed words belong to editions still under copyright rather");
("than to the public-domain base - an argument that is only worth anything if somebody can");
("actually check it. A count alone cannot be checked; a few hundred words can be read.");
("The count is the other half: a filter that removed far more than the marks account for");
("would be deleting scripture, and the totals are what makes that visible immediately.");
export async function bible_interlinear_base_dropped_report() {
  let dropped = [];
  let words_total = 0;
  let words_kept = 0;
  function verse_parts(verse_words) {
    let keys = bible_interlinear_original_keys_find(verse_words);
    let marked_key = keys.marked;
    function word_present_is(row) {
      let value = row[marked_key];
      let missing = equal(value, undefined) || equal(value, null);
      let marked = missing ? "" : String(value);
      let word = bible_interlinear_word_base_text(marked);
      let neq = not_equal(word, "");
      return neq;
    }
    let present = verse_words.filter(word_present_is);
    let base = bible_interlinear_words_base(present, marked_key);
    let kept = new Set(base);
    function removed_is(row) {
      let held = kept.has(row);
      let n = not(held);
      return n;
    }
    let removed = present.filter(removed_is);
    words_total = words_total + present.length;
    words_kept = words_kept + base.length;
    function word_of(row) {
      let value = row[marked_key];
      let marked = String(value);
      let r2 = {
        marked,
        language: row["Language"],
      };
      return r2;
    }
    let r = {
      removed: removed.map(word_of),
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  function chapter_read(chapter_code) {
    let verses = chapters[chapter_code];
    function verse_read(verse) {
      function removed_note(word) {
        dropped.push({
          reference: chapter_code + ":" + verse.verse_number,
          marked: word.marked,
          language: word.language,
        });
      }
      verse.removed.forEach(removed_note);
    }
    verses.forEach(verse_read);
  }
  object_property_names(chapters).forEach(chapter_read);
  let report = {
    words_total,
    words_kept,
    words_dropped: dropped.length,
    dropped,
  };
  return report;
}
