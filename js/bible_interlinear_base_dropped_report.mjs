import { bible_interlinear_verse_words_dropped } from "./bible_interlinear_verse_words_dropped.mjs";
import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function bible_interlinear_base_dropped_report() {
  "Every word that dropping the later editions removes from the published Bible text, listed";
  "in full with the chapter and verse it came from, plus the totals it was removed against.";
  "Listed in full, not sampled. This is a change to the text of scripture, and the argument";
  "for making it is that the removed words belong to editions still under copyright rather";
  "than to the public-domain base - an argument that is only worth anything if somebody can";
  "actually check it. A count alone cannot be checked; a few hundred words can be read.";
  "The count is the other half: a filter that removed far more than the marks account for";
  "would be deleting scripture, and the totals are what makes that visible immediately.";
  "A single verse losing a lot of words is the shape to watch for, because the marks run in";
  "spans and a span read wrongly takes a whole clause rather than a word. Reading the guillemets";
  "as an edition wrapper cost 1 Corinthians 1:2 eight of its own words and showed up here first.";
  let dropped = [];
  let words_total = 0;
  let words_kept = 0;
  function verse_parts(verse_words) {
    let verse = bible_interlinear_verse_words_dropped(verse_words);
    words_total = words_total + verse.words_total;
    words_kept = words_kept + verse.words_kept;
    let r = {
      removed: verse.removed,
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
