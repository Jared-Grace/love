import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export function app_search_main(context) {
  let root = html_mobile_default(context);
  let languages = ebible_languages();
  let languages_chosen = [];
  let languages_chosen_default = list_slice_count(languages, 1, 1);
  app_reply_languages_chosen_reset(languages_chosen, languages_chosen_default);
  let p = app_reply_languages_prompt(root);
  app_reply_buttons_languages(languages_chosen, root, languages);
}
