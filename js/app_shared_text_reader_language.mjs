import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
export function app_shared_text_reader_language(texts) {
  "One saying written out in every language this app has it in, and the one of them the reader in front of it should be shown.";
  "Each language gets the whole saying rather than a word of it. Urdu bends the word for the one before to the thing that follows it - the verse before is one word and the chapter before is another - so anything built a word at a time hands a reader of Urdu the wrong one, and hands it to them as fluent writing rather than as a fault anybody can see.";
  "No little picture in any of them. Which side an arrow stands on and which way it points follow the direction the reader reads in, and what a button says follows the language they read; two things that change for different reasons cannot share one piece of writing.";
  "English when the reader's language is not among them. A button with nothing written on it is worse than a button written in a language the reader did not ask for, and English is the one every saying here is written in first.";
  let code = app_shared_language_code_reader();
  let text = property_get_or_null(texts, code);
  let missing = null_is(text);
  if (missing) {
    let en = ebible_language_en_code();
    let english = property_get(texts, en);
    return english;
  }
  return text;
}
