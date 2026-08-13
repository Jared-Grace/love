import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_supper_hash_unknown_page_shown_is } from "./app_supper_hash_unknown_page_shown_is.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_supper_screens } from "./app_supper_screens.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_supper_main_generic(
  app_fn,
  home_fn,
  default_chosen,
  context,
) {
  let hash = html_hash_object_get();
  ("the link is read back to the reader before anything is fetched or drawn, so a bible named by a folder we do not ship is answered rather than quietly dropped on the way to a page missing a version");
  let unknown_shown = app_supper_hash_unknown_page_shown_is(context, hash);
  if (unknown_shown) {
    return;
  }
  object_merge(context, {
    supper_default_chosen: default_chosen,
  });
  let screens = app_supper_screens(home_fn);
  await app_shared_bible_initialize(context, app_fn, screens, home_fn);
}
