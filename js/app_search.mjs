import { app_search_home } from "./app_search_home.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export async function app_search(context) {
  app_shared_app_fn_set(context, app_search);
  app_shared_mobile_default_font_size(context);
  let languages_chosen = [];
  property_set_exists_not(context, "languages_chosen", languages_chosen);
  await app_search_home(context);
}
