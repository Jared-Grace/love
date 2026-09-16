import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapter_entries } from "./gloss_chapter_entries.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
import { property_get } from "./property_get.mjs";
import { bible_word_form } from "./bible_word_form.mjs";
import { not } from "./not.mjs";
import { list_unique } from "./list_unique.mjs";
export async function app_original_bible_gloss_chapter_translits_missing(
  chapter_code,
) {
  "$plain chapter_code";
  "the code is a chapter's name, like GEN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The words one authored gloss chapter explains that the interlinear hands back no transliteration for, so a chapter the reader could be shown the pronunciation of is told apart from one where showing it would leave blanks.";
  "★ IT JOINS ON THE VERY KEY THE SOUND ALREADY USES, the cut form a clip is named after, so a word whose clip plays is a word whose transliteration is found and the two can never drift apart into a page that says one thing and sounds another.";
  "An empty answer is the whole point: it says every word this chapter explains can be shown its pronunciation.";
  arguments_assert(arguments, 1);
  let entries = await gloss_chapter_entries(
    chapter_code,
    app_original_bible_gloss_generate,
  );
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let translits = {};
  function form_read(record) {
    let text = property_get(record, "text");
    let translit = property_get(record, "translit");
    translits[text] = translit;
  }
  forms.forEach(form_read);
  function entry_word(entry) {
    let word = property_get(entry, "word");
    return word;
  }
  let words = entries.map(entry_word);
  function translit_absent(word) {
    let key = bible_word_form(word);
    let found = translits[key];
    let n = not(found);
    return n;
  }
  let absent = words.filter(translit_absent);
  let missing = list_unique(absent);
  let r = {
    chapter_code,
    words: words.length,
    missing_count: missing.length,
    missing,
  };
  return r;
}
