import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_ceb_bible_gloss_words_roots_unproved_holdings_row_owed } from "./app_ceb_bible_gloss_words_roots_unproved_holdings_row_owed.mjs";
import { list_map } from "./list_map.mjs";
import { property_equals } from "./property_equals.mjs";
export async function app_ceb_bible_gloss_words_roots_unproved_holdings_person_is(
  arbitrated,
) {
  arguments_assert(arguments, 1);
  let unproved = property_get(arbitrated, "unproved");
  let known = await binisaya_words_known();
  let folded_index = binisaya_words_known_folded_index(known);
  function accent_free(root) {
    let plain = text_accent_marks_removed(root);
    let lowered = text_lower_to(plain);
    return lowered;
  }
  let row_owed = app_ceb_bible_gloss_words_roots_unproved_holdings_row_owed(
    accent_free,
    known,
    folded_index,
  );
  let owed_rows = list_map(unproved, row_owed);
  function accent_is(row) {
    let accented = property_equals(row, "owed", "accent");
    return accented;
  }
  function gather_is(row) {
    let fetchable = property_equals(row, "owed", "gather");
    return fetchable;
  }
  function person_is(row) {
    let waiting = property_equals(row, "owed", "person");
    return waiting;
  }
  let r = {
    unproved,
    owed_rows,
    accent_is,
    gather_is,
    person_is,
  };
  return r;
}
