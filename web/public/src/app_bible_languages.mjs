import { ebible_language_en } from "../../../love/public/src/ebible_language_en.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { storage_local_exists_not_context } from "../../../love/public/src/storage_local_exists_not_context.mjs";
import { html_scroll_top_set } from "../../../love/public/src/html_scroll_top_set.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_languages(context) {
  marker("1");
  let root = html_clear_context(context);
  let languages = ebible_languages();
  let key = "languages_chosen";
  let n = storage_local_exists_not_context(context, key);
  if (n) {
    let en_l = ebible_language_en();
    let languages_chosen_default = [en_l];
    storage_local_set_context(context, key);
    html_scroll_top_set(content, s);
  }
  app_reply_buttons_languages(languages_chosen, root, languages);
}
