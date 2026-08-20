import { global_function_get_or_null } from "./global_function_get_or_null.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_language_code_reader() {
  "The code of the language this app is speaking to the reader in - its buttons, its labels, its notices - which is not the language of whatever text it happens to be showing them.";
  "The two come apart in the app that teaches English. There the words on display are English, deliberately, because they are the thing being learned; everything around them is said in the language the reader already has. A screen pointed by what it displays would face the wrong way on every one of those pages.";
  "English when nobody has said otherwise. Every app here spoke English and only English until now, so an app that says nothing carries on exactly as it did, and nothing has to be visited to keep it that way.";
  let stored = global_function_get_or_null(app_shared_language_code_reader);
  let missing = null_is(stored);
  if (missing) {
    let en = ebible_language_en_code();
    return en;
  }
  return stored;
}
