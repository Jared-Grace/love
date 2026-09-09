import { app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_word_read } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_word_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
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
  let word_read =
    app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_word_read(
      rooted,
      claim_root,
      claim_chapter,
      rows,
    );
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
