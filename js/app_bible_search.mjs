import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { app_bible_search_home } from "./app_bible_search_home.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
export async function app_bible_search(context) {
  app_shared_app_fn_set(context, app_bible_search);
  app_shared_mobile_default_font_size(context);
  let languages_chosen = [];
  property_set_exists_not(context, "languages_chosen", languages_chosen);
  await app_bible_search_home(context);
}
