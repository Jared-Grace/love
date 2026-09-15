import { property_not } from "./property_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_row_across_only_is() {
  arguments_assert(arguments, 0);
  function row_across_only_is(row) {
    let outside_chapter = property_not(row, "within_chapter");
    return outside_chapter;
  }
  return row_across_only_is;
}
