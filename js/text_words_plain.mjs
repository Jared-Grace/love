import { arguments_assert } from "./arguments_assert.mjs";
import { text_words } from "./text_words.mjs";
import { text_word_plain } from "./text_word_plain.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function text_words_plain(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("the passage is ordinary writing. It is read as words and nothing that runs.");
  ("Every word of a passage stripped to its bare letters in one case, in the order the passage says them.");
  ("This is what two writings of the same passage have to come down to before they can be set beside each other. Punctuation, capitals and the marks that sit on a letter all differ between two printings of one sentence without the sentence differing at all, so they come off once, here, and whatever is left differing is a real disagreement about the words.");
  ("Nothing is left out for being a small word. A reader wanting only the words that carry a meaning of their own is asking a different question, and that question is asked a layer up.");
  let words = text_words(text);
  let plain = [];
  for (let word of words) {
    let bare = text_word_plain(word);
    let some = greater_than(bare.length, 0);
    if (some) {
      list_add(plain, bare);
    }
  }
  return plain;
}
