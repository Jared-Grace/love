import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_bible_languages(context) {
  marker("1");
  let root = html_clear_context(context);
  let languages = ebible_languages();
  app_reply_buttons_languages(languages_chosen, root, languages);
}
