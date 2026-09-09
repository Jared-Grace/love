import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_unproved_holdings_person_is } from "./app_ceb_bible_gloss_words_roots_unproved_holdings_person_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
export async function app_ceb_bible_gloss_words_roots_unproved_holdings_row_unheard(
  arbitrated,
) {
  arguments_assert(arguments, 1);
  let r2 =
    await app_ceb_bible_gloss_words_roots_unproved_holdings_person_is(
      arbitrated,
    );
  let person_is = property_get(r2, "person_is");
  let gather_is = property_get(r2, "gather_is");
  let accent_is = property_get(r2, "accent_is");
  let owed_rows = property_get(r2, "owed_rows");
  let unproved = property_get(r2, "unproved");
  let accent = list_filter(owed_rows, accent_is);
  let gather = list_filter(owed_rows, gather_is);
  let person = list_filter(owed_rows, person_is);
  function row_unheard(row) {
    let unheard = property_get(row, "unheard");
    return unheard;
  }
  let r = {
    unproved,
    accent,
    gather,
    person,
    row_unheard,
  };
  return r;
}
