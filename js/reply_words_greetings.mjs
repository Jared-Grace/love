import { arguments_assert } from "./arguments_assert.mjs";
export function reply_words_greetings() {
  arguments_assert(arguments, 0);
  ("The words of the plain greeting, before any emoji is put round them.");
  let words = "Greetings in the name of our LORD Jesus Christ!";
  return words;
}
