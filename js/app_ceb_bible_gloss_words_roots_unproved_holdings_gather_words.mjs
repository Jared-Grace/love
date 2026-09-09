import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated.mjs";
import { app_ceb_bible_gloss_words_roots_unproved_holdings_row_unheard } from "./app_ceb_bible_gloss_words_roots_unproved_holdings_row_unheard.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export async function app_ceb_bible_gloss_words_roots_unproved_holdings_gather_words() {
  arguments_assert(arguments, 0);
  let arbitrated = await app_ceb_bible_gloss_words_roots_apart_arbitrated();
  let r2 =
    await app_ceb_bible_gloss_words_roots_unproved_holdings_row_unheard(
      arbitrated,
    );
  let row_unheard = property_get(r2, "row_unheard");
  let person = property_get(r2, "person");
  let gather = property_get(r2, "gather");
  let accent = property_get(r2, "accent");
  let unproved = property_get(r2, "unproved");
  let named = list_map_concat_multiple(gather, row_unheard);
  let gather_words = list_map_unique(named, text_lower_to);
  let r = {
    person,
    gather,
    accent,
    unproved,
    gather_words,
  };
  return r;
}
