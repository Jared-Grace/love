import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_text_in_language_code(texts, language_code) {
  arguments_assert(arguments, 2);
  ("One saying written out in every language this app has it in, and the one of them a named language asks for.");
  ("The picking, on its own, with the question of whose language it is left to the caller. Its neighbour asks that question one way - what does the reader in front of the screen read - and answers it out of something the app said as it started. A page built before anything is running cannot ask that at all, and has to be told the language while it is being written. Both then pick the same way, so a saying cannot come out one way on the screen and another way in the page.");
  ("English when the saying is not written in the language asked for. A button with nothing written on it is worse than a button written in a language the reader did not ask for, and English is the one every saying here is written in first.");
  let text = property_get_or_null(texts, language_code);
  let missing = null_is(text);
  if (missing) {
    let en = ebible_language_en_code();
    let english = property_get(texts, en);
    return english;
  }
  return text;
}
