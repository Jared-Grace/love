import { gloss_chapters_affix_kinds_wrong } from "./gloss_chapters_affix_kinds_wrong.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function gloss_affix_kinds_wrong_words_generic(fn, known) {
  "Every distinct word in one gloss store whose explanation names a piece the dictionary gives no piece of, each with the chapters it is wrong in, commonest first.";
  "The chapter view answers which chapter to sit down with. This answers how much writing there actually is, which is a different number: the same word is wrong wherever it was met, and the store's twelve hundred wrong claims are four hundred odd words.";
  "Words rather than sightings, because a word's parts do not change from one psalm to the next - the dictionary is asked about the word and knows nothing of where it was read. So one sentence written for a word is the right sentence in every chapter holding it, and writing it once is not a shortcut but the truth about the work.";
  "The chapters are named once each and the sightings counted separately, because those are two different numbers and the file that carries a correction is keyed by chapter. A chapter named twice there is the same entry written twice.";
  "The standing explanations are all kept rather than one being taken as typical. They differ, and a writer correcting a word wants to see what the wrong sentences had in common before deciding what the right one says.";
  let offenders = await gloss_chapters_affix_kinds_wrong(fn, known);
  let by_word = {};
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      let held = property_get_or_null(by_word, word);
      let gathered = held;
      if (null_is(held)) {
        gathered = {
          word,
          root: property_get(finding, "root"),
          affixes: property_get(finding, "affixes"),
          given: property_get(finding, "given"),
          said: property_get(finding, "said"),
          sightings: 0,
          chapters: [],
          explains: [],
        };
        property_set(by_word, word, gathered);
      }
      let sightings = property_get(gathered, "sightings");
      let value = add(sightings, 1);
      property_set(gathered, "sightings", value);
      let chapters = property_get(gathered, "chapters");
      let named = list_includes(chapters, chapter_code);
      if (not(named)) {
        list_add(chapters, chapter_code);
      }
      let explain = property_get(finding, "explain");
      let explains = property_get(gathered, "explains");
      let seen = list_includes(explains, explain);
      if (not(seen)) {
        list_add(explains, explain);
      }
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let words = object_property_names(by_word);
  function word_gathered(word) {
    let gathered = property_get(by_word, word);
    return gathered;
  }
  let gathered_all = list_map(words, word_gathered);
  function sightings_of(gathered) {
    let sightings = property_get(gathered, "sightings");
    return sightings;
  }
  let r = list_sort_number_mapper_reverse(gathered_all, sightings_of);
  return r;
}
