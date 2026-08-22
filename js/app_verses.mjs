import { app_verses_group } from "./app_verses_group.mjs";
import { app_verses_count_updates } from "./app_verses_count_updates.mjs";
import { app_verses_copy } from "./app_verses_copy.mjs";
import { app_shared_language_hash_unknown_page_shown_is } from "./app_shared_language_hash_unknown_page_shown_is.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_verses(context) {
  app_shared_app_fn_set(context, app_verses);
  let hash = html_hash_object_get();
  ("the link is read back to the reader before anything is fetched or drawn, so a mistyped language is answered rather than silently dropped on the way to an english-looking page");
  let unknown_shown = app_shared_language_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  let initialized = await app_reply_initialize(context);
  let r = await app_verses_count_updates(initialized, hash);
  let count_updates = property_get(r, "count_updates");
  let languages_chosen = property_get(r, "languages_chosen");
  let verse_groups = property_get(r, "verse_groups");
  await app_verses_group(
    r,
    count_updates,
    copy,
    verse_groups,
    languages_chosen,
  );
  async function copy() {
    let r2 = await app_verses_copy(verse_groups);
    return r2;
  }
}
