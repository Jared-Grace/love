import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function app_ceb_bible_gloss_words_roots_chapters_disagreeing_row_across_only_is_row_across_only_is() {
  arguments_assert(arguments, 0);
  function row_across_only_is(row) {
    let within_chapter = property_get(row, "within_chapter");
    let outside_chapter = not(within_chapter);
    return outside_chapter;
  }
  return row_across_only_is;
}
