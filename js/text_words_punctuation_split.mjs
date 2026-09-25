import { arguments_assert } from "./arguments_assert.mjs";
import { regex_word_or_punctuation } from "./regex_word_or_punctuation.mjs";
import { null_is } from "./null_is.mjs";
export function text_words_punctuation_split(t) {
  "The words one piece of text carries and the marks of punctuation standing among them, each one on its own, in the order they were written.";
  "This is the reader for anything that has to know a sentence ended. The readers beside it cut at punctuation and hand back only the words, which is right for looking a word up and wrong for asking what came after it.";
  "Text holding no words and no marks at all comes back as nothing rather than as a missing answer, because a caller walking what came back should not have to ask first whether there is anything to walk.";
  arguments_assert(arguments, 1);
  let r = regex_word_or_punctuation();
  let found = t.match(r);
  let none = null_is(found);
  if (none) {
    let nothing = [];
    return nothing;
  }
  return found;
}
