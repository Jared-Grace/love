import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_eng_pages_language } from "./app_learn_eng_pages_language.mjs";
export function apps_pages_language_table() {
  "Which apps have a page per language, each pointing at the function that lists that app's languages. An app not named here has only its own page.";
  arguments_assert(arguments, 0);
  let table = {
    learn_eng: app_learn_eng_pages_language,
  };
  return table;
}
