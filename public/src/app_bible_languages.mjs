import { html_scroll_top_set } from "../../../love/public/src/html_scroll_top_set.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { storage_local_exists_context } from "../../../love/public/src/storage_local_exists_context.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_languages(context) {
  marker("1");
  let root = html_clear_context(context);
  let languages = ebible_languages();
  let exists = storage_local_exists_context(context, key);
  if (exists) {
    let s = storage_local_get_context(context, key);
    html_scroll_top_set(content, s);
  }
  app_reply_buttons_languages(languages_chosen, root, languages);
}
