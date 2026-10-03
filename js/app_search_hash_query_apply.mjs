import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal_loose } from "./equal_loose.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { text_url_decode_or_same } from "./text_url_decode_or_same.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { equal } from "./equal.mjs";
import { html_value_set } from "./html_value_set.mjs";
export async function app_search_hash_query_apply(input, search) {
  arguments_assert(arguments, 2);
  ("the words the address asks for, put in the box and searched for.");
  ("the box holds what was last searched for, so an address that says the same thing is this page's own writing coming back to it - searching again there would run the very search that wrote it a second time.");
  let hash = html_hash_object_get();
  let key = app_search_query_hash_key();
  let query_hash = property_get_or_null(hash, key);
  let asks_nothing = equal_loose(query_hash, null);
  if (asks_nothing) {
    return;
  }
  ("THE ADDRESS HANDS BACK ITS OWN PERCENT SPELLING AND MUST BE READ BACK OUT OF IT. A page's hash is given to it exactly as the browser stores it, which spells every letter outside plain ASCII as percent pairs - so a shared search for خدا arrived as %D8%AE%D8%AF%D8%A7, and the word cutter, which keeps Latin letters, made the words d8, ae, af and a7 out of it and looked those up. The page then said nothing came back for them, which was true and told the reader nothing.");
  ("Every other word an address here names is a code, a book name or a number, so this is the only value that needed it - the search box is the one place a reader's own writing goes into a link. Reading it back is undone after the plus, never before: a plus written as a percent pair means a plus and not a gap.");
  let plus = app_search_query_hash_word_gap();
  let spaced = text_replace_to_space(query_hash, plus);
  let query_from_hash = text_url_decode_or_same(spaced);
  let query_shown = html_value_get(input);
  let same = equal(query_shown, query_from_hash);
  if (same) {
    return;
  }
  html_value_set(input, query_from_hash);
  await search();
}
