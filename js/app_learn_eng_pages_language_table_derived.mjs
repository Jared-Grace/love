import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_eng_pages_language } from "./app_learn_eng_pages_language.mjs";
export function app_learn_eng_pages_language_table_derived() {
  "What the shared table of language pages should hold, derived from learn_eng's stores right now.";
  arguments_assert(arguments, 0);
  let pages = app_learn_eng_pages_language();
  let table = {
    learn_eng: pages,
  };
  return table;
}
