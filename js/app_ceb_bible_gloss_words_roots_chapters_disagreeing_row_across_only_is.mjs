import { app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_disagreeing } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_disagreeing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is(
  rooted,
  claim_root,
  words,
) {
  arguments_assert(arguments, 3);
  let disagreeing =
    app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_disagreeing(
      rooted,
      claim_root,
      words,
    );
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
