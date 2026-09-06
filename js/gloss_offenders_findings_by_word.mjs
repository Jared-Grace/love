import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { object_pick } from "./object_pick.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_offenders_findings_by_word(offenders, keep_is, carried) {
  "Every word one sweep over a gloss store found fault with, named once each however many chapters met it, with the chapters it was met in and the several things said about it, commonest first.";
  "A sweep hands its offenders back one chapter deep, and a reader repairing them wants one row per word instead. A word's parts do not change from one psalm to the next - the dictionary is asked about the word and knows nothing of where it was read - so one sentence written for a word is the right sentence in every chapter holding it. The walk from the one shape to the other is the same for every sweep, so it lives here and only which findings to keep and which of their fields to carry are handed in.";
  "The chapters are named once each and the sightings counted separately, because those are two different numbers and the file that carries a correction is keyed by chapter. A chapter named twice there is the same entry written twice.";
  "The standing explanations are all kept rather than one being taken as typical. They differ, and a writer correcting a word wants to see what the wrong sentences had in common before deciding what the right one says.";
  arguments_assert(arguments, 3);
  let by_word = {};
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let keep = keep_is(finding);
      if (not(keep)) {
        return;
      }
      let word = property_get(finding, "word");
      let held = property_get_or_null(by_word, word);
      let gathered = held;
      if (null_is(held)) {
        let picked = object_pick(finding, carried);
        gathered = {
          word,
          sightings: 0,
          chapters: [],
          explains: [],
        };
        object_merge_replace(gathered, picked);
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
  function word_gathered(one_word) {
    let gathered = property_get(by_word, one_word);
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
