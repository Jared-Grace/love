import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_verse_words_clean_unique() {
  arguments_assert(arguments, 0);
  ("The words of the shared verse, each one said only once.");
  ("The lessons that compare two words draw both from this. A word the verse says");
  ("twice would let the same word be drawn for both sides, and a question asking");
  ("which of two words comes first has no answer when they are the same word.");
  let words = app_code_verse_words_clean();
  let unique = list_unique(words);
  return unique;
}
