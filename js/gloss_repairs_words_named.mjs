import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_repairs_read } from "./gloss_repairs_read.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function gloss_repairs_words_named(fn) {
  "Every different word the handover file names anywhere, gathered across all the chapters it names, each said once however many chapters ask for it.";
  "The handover file is keyed on chapters and then on words, and a word wanted in twenty chapters stands twenty times in it. What a repair needs before it starts is the other shape - the words, once each - because whatever it means to look up about a word it should look up once and not once per chapter.";
  "The order is the order the words are first met, walking the chapters as the file writes them. Nothing downstream has depended on that so far, but it is worth saying that it is stable rather than accidental: the same file gives the same list, so a run of a repair can be compared with the run before it.";
  "It says nothing about whether the store actually holds any of these words. A word can be named in the handover and be a misspelling that no chapter explains, and finding that out means walking the store, which is a different question and has its own readings.";
  arguments_assert(arguments, 1);
  let repairs = await gloss_repairs_read(fn);
  let chapter_codes = object_property_names(repairs);
  let met = {};
  function chapter_read(chapter_code) {
    let wanted = property_get(repairs, chapter_code);
    let named = object_property_names(wanted);
    function word_note(word) {
      property_set(met, word, true);
    }
    each(named, word_note);
  }
  each(chapter_codes, chapter_read);
  let words = object_property_names(met);
  return words;
}
