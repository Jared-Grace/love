import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes_all } from "./app_ceb_bible_gloss_roots_disagreeing_classes_all.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { gloss_classes_backing_mark } from "./gloss_classes_backing_mark.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_root_unwalked_cause } from "./gloss_root_unwalked_cause.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_roots_silence_causes(sample_size) {
  "The disagreements the dictionary said nothing about, split by why it said nothing, with the ones already answerable on this machine listed out.";
  "Four fifths of the sightings gathered end in silence, and a pile that size gets read as one thing and planned for as one thing. It is not one thing. Roughly half of it is words the dictionary has never been asked about, which closes by going and asking. Roughly the other half is words it holds and carries no breakdown of, which never closes that way at all - asking a second time fetches the same page. A plan made from the total alone spends half its effort where no effort can land.";
  "The smallest of the three is the one to act on first and the only one costing nothing. Those are words the dictionary does hold, under one of the two spellings Cebuano gives a sound, and was asked in the other. The answer is already on the machine, so they are listed out here rather than counted, commonest first.";
  "A word reached under the other spelling is asked every question a directly held word is asked before it is called answerable, because an entry that is free to reach and carries no breakdown of its own has moved nobody nearer an answer. Counting those as winnable overstated the free part of this by a third when it was first measured by hand.";
  "The count of silent sightings is gathered on its own pass rather than by adding the causes up, so the two can disagree. If they ever do, a cause is being missed and the split is not the whole of the silence it claims to divide.";
  "This says nothing about the disagreements the dictionary did answer. Those are a queue of their own and a different reader gathers them.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let gathered =
    await app_ceb_bible_gloss_roots_disagreeing_classes_all(sample_size);
  let classes = property_get(gathered, "classes");
  let known = await binisaya_words_known();
  let folded_index = binisaya_words_known_folded_index(known);
  let marked = gloss_classes_backing_mark(classes, known);
  function silent_is(one_class) {
    let backing = property_get_or_null(one_class, "backing");
    let answer = equal(backing, "silent");
    return answer;
  }
  let silent = list_filter(marked, silent_is);
  let totals = {
    silent: 0,
  };
  function sighting_add(one_class) {
    let count = property_get(one_class, "count");
    let so_far = property_get(totals, "silent");
    let total = add(so_far, count);
    property_set(totals, "silent", total);
  }
  each(silent, sighting_add);
  let by_cause = {};
  let sightings = {};
  function cause_add(one_class) {
    let root = property_get(one_class, "root");
    let cause = gloss_root_unwalked_cause(known, folded_index, root);
    property_set(one_class, "cause", cause);
    let held = property_get_or_null(by_cause, cause);
    let first = null_is(held);
    let rows = first ? [] : held;
    list_add(rows, one_class);
    property_set(by_cause, cause, rows);
    let count = property_get(one_class, "count");
    let so_far = first ? 0 : property_get(sightings, cause);
    let total = add(so_far, count);
    property_set(sightings, cause, total);
  }
  each(silent, cause_add);
  let causes = object_property_names(by_cause);
  let classes_counted = {};
  function cause_size_put(cause) {
    let rows = property_get(by_cause, cause);
    let size = list_size(rows);
    property_set(classes_counted, cause, size);
  }
  each(causes, cause_size_put);
  let held_otherwise = property_get_or_null(by_cause, "spelled_otherwise");
  let none = null_is(held_otherwise);
  let reachable = none ? [] : held_otherwise;
  function class_count(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  let reachable_now = list_sort_number_mapper_reverse(reachable, class_count);
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(marked);
  let silent_classes = list_size(silent);
  let silent_sightings = property_get(totals, "silent");
  let r = {
    classes_total,
    classes_read,
    silent_classes,
    silent_sightings,
    sightings,
    classes_counted,
    reachable_now,
  };
  return r;
}
