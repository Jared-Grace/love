import { arguments_assert } from "./arguments_assert.mjs";
export function reply_word_kind_of(word, lookup) {
  arguments_assert(arguments, 2);
  if (/[0-9]/.test(word)) {
    let number = "number";
    return number;
  }
  if (lookup.words.has(word)) {
    let dictionary = "dictionary";
    return dictionary;
  }
  if (lookup.names.has(word)) {
    let name = "name";
    return name;
  }
  let unknown = "unknown";
  return unknown;
}
