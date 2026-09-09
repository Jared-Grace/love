import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export function app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is(
  rooted,
  claim_root,
  words,
) {
  arguments_assert(arguments, 3);
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
  let r = {
    disagreeing,
    row_across_only_is,
  };
  return r;
}
