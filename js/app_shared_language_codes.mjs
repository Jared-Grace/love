import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_language_codes() {
  arguments_assert(arguments, 0);
  ("The language each app speaks to its reader in, keyed by the app's short name - only the apps that do not speak English are here.");
  ("Urdu is not written down here as a word. It is asked of the language itself, which is the one the app explains its English words in, because the app speaks Urdu to its reader for exactly that reason and not for a second one. Written down twice they could come to disagree, and the way they would disagree is a reader being handed a screen in one language and a notice in another.");
  let urdu = ebible_language_urdu();
  let property_name = language_code_key();
  let code_urdu = property_get(urdu, property_name);
  let r = {
    en_learn_bible: code_urdu,
  };
  return r;
}
