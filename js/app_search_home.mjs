import { app_search_hash_query_apply } from "./app_search_hash_query_apply.mjs";
import { html_on_hash_change } from "./html_on_hash_change.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { property_get } from "./property_get.mjs";
import { app_search_home_query_hash } from "./app_search_home_query_hash.mjs";
import { app_shared_language_hash_unknown_page_shown_is } from "./app_shared_language_hash_unknown_page_shown_is.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
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
  let r = app_search_home_query_hash(context, hash);
  let content = property_get(r, "content");
  let input = property_get(r, "input");
  let search = property_get(r, "search");
  ("the address is read here at opening, and again every time it changes: a link to a search, opened while this page is already showing, changes nothing but the address, so a page that only read it at opening answered such a link with the search it was already showing");
  async function changed() {
    await app_search_hash_query_apply(input, search);
  }
  html_on_hash_change(changed);
  await app_search_hash_query_apply(input, search);
  ("this screen clears root each time it draws, so re-add the foot of the page here; named from the search app so the note reads 'search app: '");
  app_shared_footer(content);
}
