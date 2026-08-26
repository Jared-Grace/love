import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { app_shared_text_in_language_code } from "./app_shared_text_in_language_code.mjs";
export function app_shared_text_reader_language(texts) {
  arguments_assert(arguments, 1);
  ("One saying written out in every language this app has it in, and the one of them the reader in front of it should be shown.");
  ("Each language gets the whole saying rather than a word of it. Urdu bends the word for the one before to the thing that follows it - the verse before is one word and the chapter before is another - so anything built a word at a time hands a reader of Urdu the wrong one, and hands it to them as fluent writing rather than as a fault anybody can see.");
  ("No little picture in any of them. Which side an arrow stands on and which way it points follow the direction the reader reads in, and what a button says follows the language they read; two things that change for different reasons cannot share one piece of writing.");
  ("All this asks is whose language it is. The picking itself is next door, so a page written before anything is running - which can be handed a language but can ask nothing - picks by exactly the same rule as a screen already in front of somebody.");
  let code = app_shared_language_code_reader();
  let r = app_shared_text_in_language_code(texts, code);
  return r;
}
