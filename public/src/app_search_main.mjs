import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export function app_search_main() {
  let languages = ebible_languages();
  let p = app_reply_languages_prompt(root);
}
