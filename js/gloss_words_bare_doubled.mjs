import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_words_named } from "./gloss_entries_words_named.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { not } from "./not.mjs";
export async function gloss_words_bare_doubled(fn) {
  "Every word one gloss store explains under more than one spelling at once - the bare spelling and the same word still wearing a mark from the sentence it was read in - each named beside those spellings, the chapters they were met in, and how many different sentences were written for it.";
  "A gloss store is keyed by the word exactly as the verse spelled it, so a word met once mid-sentence and once before a comma is filed twice, and the page shows whichever entry the passage it is painting happens to hold. That is invisible from inside a single chapter: each entry is correct where it sits, and no check anywhere compares one chapter's key against another's.";
  "★ THE NUMBER THAT MATTERS IS NOT HOW MANY WORDS ARE DOUBLED BUT HOW MANY OF THE DOUBLES DISAGREE. Two entries saying the same thing under two spellings are a tidiness fault and cost a reader nothing. Two entries saying different things are a word the app explains one way in one chapter and another way in another, with nothing anywhere to say which was meant - and that is the only part worth a person's time, so it is counted on its own rather than left to be found by reading.";
  "A word whose spellings are all marked is kept apart from one filed bare as well. Only the second is a doubling in the sense that matters, because the first is a word the store has simply never once filed cleanly, and the repair for it is a different repair.";
  arguments_assert(arguments, 1);
  async function chapter_read(chapter_code) {
    let named = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      gloss_entries_words_named,
    );
    return named;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  function kept_is(finding) {
    let every_one = true;
    return every_one;
  }
  let carried = ["bare"];
  let rows = gloss_offenders_findings_by_word(offenders, kept_is, carried);
  let grouped = list_group_by_property(rows, "bare");
  function group_doubled_is(group) {
    let items = property_get(group, "items");
    let spellings = list_size(items);
    let doubled = greater_than(spellings, 1);
    return doubled;
  }
  function item_word(item) {
    let word = property_get(item, "word");
    return word;
  }
  function item_chapters(item) {
    let chapters = property_get(item, "chapters");
    return chapters;
  }
  function item_explains(item) {
    let explains = property_get(item, "explains");
    return explains;
  }
  function item_sightings(item) {
    let sightings = property_get(item, "sightings");
    return sightings;
  }
  function group_read(group) {
    let bare = property_get(group, "key");
    let items = property_get(group, "items");
    let spellings = list_map(items, item_word);
    let chapters_all = list_map_concat_multiple(items, item_chapters);
    let chapters = list_unique(chapters_all);
    let explains_all = list_map_concat_multiple(items, item_explains);
    let explains = list_unique(explains_all);
    let sightings = list_map_sum(items, item_sightings);
    let bare_filed = list_includes(spellings, bare);
    let wordings = list_size(explains);
    let disagreeing = greater_than(wordings, 1);
    let r = {
      bare,
      spellings,
      bare_filed,
      sightings,
      wordings,
      disagreeing,
      chapters,
    };
    return r;
  }
  let doubled_groups = list_filter(grouped, group_doubled_is);
  let read_all = list_map(doubled_groups, group_read);
  function row_sightings(row) {
    let sightings = property_get(row, "sightings");
    return sightings;
  }
  let doubled = list_sort_number_mapper_reverse(read_all, row_sightings);
  function row_bare_filed_is(row) {
    let bare_filed = property_get(row, "bare_filed");
    return bare_filed;
  }
  function row_marked_only_is(row) {
    let bare_filed = property_get(row, "bare_filed");
    let unfiled = not(bare_filed);
    return unfiled;
  }
  function row_disagreeing_is(row) {
    let disagreeing = property_get(row, "disagreeing");
    return disagreeing;
  }
  let bare_filed = list_filter(doubled, row_bare_filed_is);
  let marked_only = list_filter(doubled, row_marked_only_is);
  let disagreeing = list_filter(bare_filed, row_disagreeing_is);
  let words_filed_once = list_size(rows);
  let words_doubled = list_size(doubled);
  let words_bare_filed = list_size(bare_filed);
  let words_marked_only = list_size(marked_only);
  let words_disagreeing = list_size(disagreeing);
  let sightings_disagreeing = list_map_sum(disagreeing, row_sightings);
  let r = {
    words_filed_once,
    words_doubled,
    words_bare_filed,
    words_marked_only,
    words_disagreeing,
    sightings_disagreeing,
    disagreeing,
    bare_filed,
    marked_only,
  };
  return r;
}
