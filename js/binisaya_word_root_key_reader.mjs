import { binisaya_word_root_key } from "./binisaya_word_root_key.mjs";
export function binisaya_word_root_key_reader(known) {
  "A reader that answers any Cebuano word with the key its root gives it, over one dictionary already opened.";
  "The dictionary is opened once and the reader carries it, so a sweep over two hundred chapters opens it once rather than once a chapter.";
  function word_key_read(word) {
    let key = binisaya_word_root_key(known, word);
    return key;
  }
  return word_key_read;
}
