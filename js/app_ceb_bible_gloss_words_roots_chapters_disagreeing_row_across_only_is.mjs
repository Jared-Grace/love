import { app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_row_across_only_is } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_row_across_only_is.mjs";
import { app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_disagreeing } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_disagreeing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  let row_across_only_is =
    app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_row_across_only_is();
  let r = {
    disagreeing,
    row_across_only_is,
  };
  return r;
}
