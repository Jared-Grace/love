import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export function app_search_main() {
  let languages = ebible_languages();
  let languages_chosen = [];
  let p = app_reply_languages_prompt(root);
  app_reply_buttons_languages(languages_chosen, root, languages);
  let languages_chosen_default = list_take(languages, 1);
  app_reply_languages_chosen_reset(languages_chosen, languages_chosen_default);
}
