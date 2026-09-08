import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_words_named } from "./gloss_entries_words_named.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { add } from "./add.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_words_roots_chapters_disagreeing() {
  "Every Cebuano word the gloss store takes back to one root in one chapter and to a different root in another chapter, each named beside the roots, the chapters that gave them, and what kind of difference it is - with the ones a single chapter already shows on its own kept apart from the ones only a reading across the whole store can see.";
  "The check beside this one sets a chapter's sentences against each other and says out loud why it stops there: two chapters may honestly be explaining two different words that happen to be spelled alike. That is a true caution and it is not a reason the number cannot be had. It is a reason to hand back the chapters beside every row, which is what this does, so that a reader can tell a homograph from a contradiction instead of the question going unasked.";
  "★ A ROW HERE IS A DISAGREEMENT AND NOT YET A FAULT, AND THE KIND IS WHAT SEPARATES THEM. Two sentences differing over how far back to go - one naming gugma where the other names higugma - leave a reader better off than silence and come back as deeper or shallower. Two roots with nothing in common come back as apart, and there one of the two sentences is simply wrong. Counting all the kinds together would make the store look far more broken than it is, so the kinds are counted separately and apart is the only one worth anybody's time.";
  "The word is keyed by its bare spelling, so a word filed once mid-sentence and once before a comma is one word here rather than two. Keying by the spelling the verse happened to use would let a contradiction hide behind a quotation mark, which is the whole reason the bare spelling is worked out where the entries are read.";
  "Whether a chapter shows the disagreement by itself is carried on every row, because those rows are already found by the check beside this one and counting them again would report old news as new. What this adds is the rest.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let rooted = {};
  let sightings_rooted = 0;
  async function chapter_read(chapter_code) {
    let named = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      gloss_entries_words_named,
    );
    function entry_read(entry) {
      let explain = property_get(entry, "explain");
      let bare = property_get(entry, "bare");
      let claimed = gloss_explain_roots_claimed(explain);
      let count = list_size(claimed);
      let silent = equal(count, 0);
      if (silent) {
        return;
      }
      let first = list_get(claimed, 0);
      let root = text_lower_to(first);
      let word = text_lower_to(bare);
      sightings_rooted = add(sightings_rooted, 1);
      let claims = property_initialize_list(rooted, word);
      let claim = {
        root,
        chapter: chapter_code,
      };
      list_add(claims, claim);
    }
    each(named, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let words = object_property_names(rooted);
  function claim_root(claim) {
    let root = property_get(claim, "root");
    return root;
  }
  function claim_chapter(claim) {
    let chapter = property_get(claim, "chapter");
    return chapter;
  }
  let rows = [];
  let comparable = 0;
  function word_read(word) {
    let claims = property_get(rooted, word);
    let named_all = list_map(claims, claim_root);
    let roots = list_unique(named_all);
    let ways = list_size(roots);
    let one = equal(ways, 1);
    comparable = add(comparable, 1);
    if (one) {
      return;
    }
    let chapters_all = list_map(claims, claim_chapter);
    let chapters = list_unique(chapters_all);
    function chapter_split_is(chapter_code) {
      let inside = [];
      function claim_read(claim) {
        let here = property_equals(claim, "chapter", chapter_code);
        if (not(here)) {
          return;
        }
        let root = property_get(claim, "root");
        list_add_if_not_includes(inside, root);
      }
      each(claims, claim_read);
      let kinds = list_size(inside);
      let split = greater_than(kinds, 1);
      return split;
    }
    let chapters_split = list_filter(chapters, chapter_split_is);
    let split_count = list_size(chapters_split);
    let within_chapter = greater_than(split_count, 0);
    let first_root = list_get(roots, 0);
    let second_root = list_get(roots, 1);
    let relation = gloss_root_claimed_relation(first_root, second_root);
    let sightings = list_size(claims);
    let row = {
      word,
      roots,
      relation,
      within_chapter,
      sightings,
      chapters,
    };
    list_add(rows, row);
  }
  each(words, word_read);
  let disagreeing = list_sort_number_mapper_reverse(rows, gloss_row_sightings);
  function row_across_only_is(row) {
    let within_chapter = property_get(row, "within_chapter");
    let outside_chapter = not(within_chapter);
    return outside_chapter;
  }
  function row_apart_is(row) {
    let apart = property_equals(row, "relation", "apart");
    return apart;
  }
  let across_only = list_filter(disagreeing, row_across_only_is);
  let apart = list_filter(across_only, row_apart_is);
  let words_rooted = list_size(words);
  let words_disagreeing = list_size(disagreeing);
  let words_across_only = list_size(across_only);
  let words_across_only_apart = list_size(apart);
  let r = {
    chapters: list_size(chapter_codes),
    words_rooted,
    sightings_rooted,
    words_disagreeing,
    words_across_only,
    words_across_only_apart,
    apart,
    across_only,
  };
  return r;
}
