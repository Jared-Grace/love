import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_eng_language_code_page_or_null } from "./app_learn_eng_language_code_page_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_learn_eng_language_code_saved_or_null } from "./app_learn_eng_language_code_saved_or_null.mjs";
export function app_learn_eng_language_code_page_or_saved_or_null() {
  "The language to open in when the address names none after the hash: the one the page's own address names first, then the one this reader chose on an earlier visit, else null.";
  "The page's address comes first because it was chosen by whoever sent the link, for this reader, while the saved one may be another person's on a shared phone.";
  arguments_assert(arguments, 0);
  let page_code = app_learn_eng_language_code_page_or_null();
  if (null_not_is(page_code)) {
    return page_code;
  }
  let saved = app_learn_eng_language_code_saved_or_null();
  return saved;
}
