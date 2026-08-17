import { app_search_home_div_results } from "./app_search_home_div_results.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_home_left } from "./app_search_home_left.mjs";
import { app_search_home_search } from "./app_search_home_search.mjs";
import { app_shared_language_hash_unknown_page_shown_is } from "./app_shared_language_hash_unknown_page_shown_is.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { not_equal_loose } from "./not_equal_loose.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
export async function app_search_home(context) {
  let hash = html_hash_object_get();
  ("the link is read back to the reader before the page is cleared, because clearing it is what would leave a reader who mistyped a language staring at an empty screen");
  let unknown_shown = app_shared_language_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  let r2 = app_search_home_left(context, hash, search);
  let left = property_get(r2, "left");
  let r3 = app_search_home_div_results(r2, left, search);
  let div_results = property_get(r3, "div_results");
  let content = property_get(r3, "content");
  let input = property_get(r3, "input");
  async function search() {
    let r = await app_search_home_search(input, context, div_results);
    return r;
  }
  let property = app_search_query_hash_key();
  let query_hash = property_get_or_null(hash, property);
  if (not_equal_loose(query_hash, null)) {
    let plus = app_search_query_hash_word_gap();
    let query_from_hash = text_replace_to_space(query_hash, plus);
    html_value_set(input, query_from_hash);
    await search();
  }
  ("this screen clears root each time it draws, so re-add the way to reach the developer here; named from the search app so the note reads 'search app: '");
  app_shared_contact_button(content);
}
